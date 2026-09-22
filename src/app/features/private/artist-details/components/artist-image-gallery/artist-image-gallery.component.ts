import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Subject, catchError, filter, finalize, map, merge, switchMap, tap, timer } from 'rxjs';
import { ArtistsDataService } from '../../../artists/services/artists-data.service';
import { ArtistDetailsDataService, ArtistImageVoting, ArtistPage } from '../../services/artist-details-data.service';

@Component({
  selector: 'app-artist-image-gallery',
  templateUrl: './artist-image-gallery.component.html',
  styleUrl: './artist-image-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistImageGalleryComponent implements OnInit {
  readonly artist = input.required<ArtistPage>();
  readonly selectedPhoto = output<string>();
  private readonly api = inject(ArtistDetailsDataService);
  private readonly imagesService = inject(ArtistsDataService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly element: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly actions = new Subject<string | null>();
  protected readonly voting = signal<ArtistImageVoting | null>(null);
  protected readonly loading = signal(true);
  protected readonly pending = signal<string | null>(null);
  protected readonly error = signal('');
  protected readonly notice = signal('');
  protected readonly activeIndex = signal(0);
  protected readonly activePhoto = computed(() => this.photos()[this.activeIndex()]);
  protected readonly totalVotes = computed(() => this.voting()?.images.reduce((sum, photo) => sum + photo.votes, 0) ?? 0);
  protected readonly failedImages = signal(new Set<string>());
  protected readonly closingTime = computed(() => {
    const round = this.voting();
    if (!round) return '';
    return new Intl.DateTimeFormat('en', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
      hourCycle: 'h23', timeZone: round.timezone
    }).format(new Date(round.closesAt));
  });
  protected readonly photos = computed(() => this.artist().artistImages.map(image => ({
    ...image, src: this.imagesService.resolveImage([image]),
    votes: this.voting()?.images.find(item => item.id === image.id)?.votes ?? 0,
    current: this.voting()?.images.find(item => item.id === image.id)?.selected ?? image.selected
  })));

  ngOnInit(): void {
    merge(timer(0, 60000).pipe(filter(() => !this.pending()), map(() => null)), this.actions).pipe(
      switchMap(imageId => {
        this.pending.set(imageId);
        this.error.set('');
        const request = imageId
          ? this.api.voteForImage(this.artist().id, imageId)
          : this.api.getImageVoting(this.artist().id);
        return request.pipe(
          tap(voting => {
            if (this.voting()?.weekStart !== voting.weekStart) this.notice.set('');
            this.voting.set(voting);
            if (imageId) this.notice.set('Your vote has been saved. You can change it until voting closes.');
            const selected = this.artist().artistImages.find(image => voting.images.some(item => item.id === image.id && item.selected));
            this.selectedPhoto.emit(selected ? this.imagesService.resolveImage([selected]) : this.artist().photo);
          }),
          catchError(error => {
            if (error.status === 503) this.voting.set(null);
            this.error.set(error.status === 503 ? 'Photo voting is temporarily unavailable.' : imageId ? 'Could not save your vote. Please try again.' : 'Could not load the weekly votes. Please try again.');
            return EMPTY;
          }),
          finalize(() => { this.loading.set(false); this.pending.set(null); })
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  protected vote(imageId: string): void {
    if (this.pending() || !this.voting()) return;
    this.notice.set('');
    this.actions.next(imageId);
  }

  protected retry(): void { this.actions.next(null); }

  protected selectPhoto(index: number): void {
    this.activeIndex.set(index);
    this.element.nativeElement.querySelector<HTMLElement>(`[data-photo-index="${index}"]`)
      ?.scrollIntoView?.({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  }

  protected movePhoto(direction: number): void {
    const count = this.photos().length;
    if (count > 1) this.selectPhoto((this.activeIndex() + direction + count) % count);
  }

  protected imageFailed(id: string): void {
    this.failedImages.update(ids => new Set([...ids, id]));
  }
}
