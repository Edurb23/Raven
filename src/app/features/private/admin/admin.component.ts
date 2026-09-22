import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Subject, catchError, finalize, switchMap } from 'rxjs';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { ArtistsDataService } from '../artists/services/artists-data.service';
import { AdminService, AdminArtist, ArtistEdit, GenreOption, FeatureFlag, AdminLog, ArtistForm } from './admin.service';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, DatePipe, RouterLink, SidebarComponent, TopBarComponent],
  templateUrl: './admin.component.html', styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  private readonly api = inject(AdminService);
  private readonly destroy = inject(DestroyRef);
  protected readonly images = inject(ArtistsDataService);
  protected readonly navigation = HOME_NAVIGATION.map(item => ({ ...item, active: false }));
  protected readonly tab = signal<'artists' | 'flags' | 'logs'>('artists');
  protected readonly artists = signal<AdminArtist[]>([]);
  protected readonly genres = signal<GenreOption[]>([]);
  protected readonly genreQuery = signal('');
  protected readonly filteredGenres = computed(() => {
    const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const query = normalize(this.genreQuery().trim());
    return this.genres().filter(genre => normalize(genre.name).includes(query));
  });
  protected readonly selected = signal<ArtistEdit | null>(null);
  protected readonly flags = signal<FeatureFlag[]>([]);
  protected readonly logs = signal<AdminLog[]>([]);
  protected readonly busy = signal(false);
  protected readonly loading = signal(false);
  protected readonly bannerDimensions = signal<{ width: number; height: number } | null>(null);
  protected readonly pendingPhotoRemoval = signal<string | null>(null);
  protected readonly message = signal('');
  protected readonly error = signal('');
  protected readonly artistPage = signal(0);
  protected readonly logPage = signal(0);
  protected errorsOnly = false;
  protected form: ArtistForm = { name: '', bio: '', genres: [] };
  private readonly selection = new Subject<string | null>();

  constructor() {
    this.selection.pipe(switchMap(id => {
      this.selected.set(null); this.bannerDimensions.set(null); this.genreQuery.set(''); this.form = { name: '', bio: '', genres: [] };
      this.pendingPhotoRemoval.set(null);
      this.error.set(''); this.message.set('');
      if (!id) return EMPTY;
      this.loading.set(true);
      return this.api.artist(id).pipe(catchError(() => { this.error.set('Could not load this artist.'); return EMPTY; }), finalize(() => this.loading.set(false)));
    }), takeUntilDestroyed(this.destroy)).subscribe(data => this.fill(data));
    this.loadArtists();
    this.api.genres().pipe(takeUntilDestroyed(this.destroy)).subscribe({ next: data => this.genres.set(data), error: () => this.error.set('Could not load genres.') });
  }
  private fill(data: ArtistEdit) {
    this.selected.set(data);
    this.form = { name: data.artist.name, bio: data.artist.bio, genres: [...data.genreIds] };
  }
  protected choose(id: string | null) { if (!this.busy()) this.selection.next(id); }
  protected setGenre(id: string, checked: boolean) {
    if (this.busy() || this.loading()) return;
    this.form.genres = checked ? [...new Set([...this.form.genres, id])] : this.form.genres.filter(genreId => genreId !== id);
  }
  protected setTab(tab: 'artists' | 'flags' | 'logs') {
    this.tab.set(tab); this.error.set(''); this.message.set('');
    if (tab === 'flags') this.loadFlags();
    if (tab === 'logs') this.loadLogs();
  }
  protected loadArtists(page = this.artistPage()) {
    this.artistPage.set(page);
    this.api.artists(page).pipe(takeUntilDestroyed(this.destroy)).subscribe({ next: data => this.artists.set(data), error: () => this.error.set('Could not load artists.') });
  }
  protected save() {
    if (this.busy() || this.loading()) return;
    if (!this.form.name.trim() || !this.form.bio.trim() || !this.form.genres.length) { this.error.set('Enter a name, biography and at least one genre.'); return; }
    this.busy.set(true); this.error.set(''); this.message.set('');
    this.api.save(this.selected()?.artist.id ?? null, { ...this.form, name: this.form.name.trim(), bio: this.form.bio.trim() })
      .pipe(finalize(() => this.busy.set(false)), takeUntilDestroyed(this.destroy)).subscribe({
        next: data => { this.fill(data); this.loadArtists(); this.message.set('Artist saved.'); },
        error: () => this.error.set('Could not save the artist. Check the fields and try again.')
      });
  }
  protected block() {
    const selected = this.selected(); if (!selected || this.busy()) return;
    this.busy.set(true); this.error.set('');
    this.api.block(selected.artist.id, !selected.blocked).pipe(finalize(() => this.busy.set(false)), takeUntilDestroyed(this.destroy)).subscribe({
      next: data => { this.selected.set(data); this.loadArtists(); this.message.set(data.blocked ? 'Artist blocked and hidden from the catalog.' : 'Artist unblocked.'); },
      error: () => this.error.set('Could not change artist status.')
    });
  }
  protected upload(event: Event, background = false) {
    const input = event.target as HTMLInputElement; const file = input.files?.[0]; const selected = this.selected();
    input.value = ''; if (!file || !selected || this.busy()) return;
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type) || file.size > 5 * 1024 * 1024) { this.error.set('Choose a JPEG, PNG or GIF up to 5 MB.'); return; }
    this.busy.set(true); this.error.set('');
    const request = background ? this.api.uploadBanner(selected.artist.id, file) : this.api.upload(selected.artist.id, file);
    request.pipe(switchMap(() => this.api.artist(selected.artist.id)),
      finalize(() => this.busy.set(false)), takeUntilDestroyed(this.destroy)).subscribe({
        next: data => { this.selected.set(data); this.message.set(background ? 'Background updated.' : 'Photo uploaded.'); }, error: () => this.error.set('Could not upload the image. Check whether photo uploads are enabled.')
      });
  }
  protected readBannerDimensions(event: Event) {
    const image = event.target as HTMLImageElement;
    this.bannerDimensions.set({ width: image.naturalWidth, height: image.naturalHeight });
  }
  protected removeBanner() {
    const selected = this.selected(); if (!selected || this.busy()) return;
    this.busy.set(true); this.error.set(''); this.message.set('');
    this.api.removeBanner(selected.artist.id).pipe(switchMap(() => this.api.artist(selected.artist.id)),
      finalize(() => this.busy.set(false)), takeUntilDestroyed(this.destroy)).subscribe({
        next: data => { this.selected.set(data); this.bannerDimensions.set(null); this.message.set('Background reset to the main photo.'); },
        error: () => this.error.set('Could not reset the background.')
      });
  }
  protected selectPhoto(imageId: string) {
    const selected = this.selected(); if (!selected || this.busy()) return;
    this.busy.set(true); this.error.set('');
    this.api.select(selected.artist.id, imageId).pipe(switchMap(() => this.api.artist(selected.artist.id)),
      finalize(() => this.busy.set(false)), takeUntilDestroyed(this.destroy)).subscribe({
        next: data => { this.selected.set(data); this.message.set('Main photo updated.'); }, error: () => this.error.set('Could not change the main photo.')
      });
  }
  protected removePhoto(imageId: string) {
    const selected = this.selected();
    if (!selected || this.busy() || this.pendingPhotoRemoval() !== imageId) return;
    this.busy.set(true); this.error.set(''); this.message.set('');
    this.api.removePhoto(selected.artist.id, imageId).pipe(switchMap(() => this.api.artist(selected.artist.id)),
      finalize(() => this.busy.set(false)), takeUntilDestroyed(this.destroy)).subscribe({
        next: data => { this.selected.set(data); this.pendingPhotoRemoval.set(null); this.bannerDimensions.set(null); this.message.set('Photo removed.'); },
        error: () => this.error.set('Could not remove the photo or refresh the gallery. Reload the artist before trying again.')
      });
  }
  protected loadFlags() {
    this.api.flags().pipe(takeUntilDestroyed(this.destroy)).subscribe({ next: data => this.flags.set(data), error: () => this.error.set('Could not load feature flags.') });
  }
  protected toggle(flag: FeatureFlag) {
    if (this.busy()) return;
    this.busy.set(true); this.error.set('');
    this.api.toggle(flag.key, !flag.enabled).pipe(finalize(() => this.busy.set(false)), takeUntilDestroyed(this.destroy)).subscribe({
      next: data => { this.flags.set(data); this.message.set('Feature flag updated.'); }, error: () => this.error.set('Could not update the feature flag.')
    });
  }
  protected loadLogs(page = this.logPage()) {
    this.logPage.set(page);
    this.api.logs(page, this.errorsOnly).pipe(takeUntilDestroyed(this.destroy)).subscribe({ next: data => this.logs.set(data), error: () => this.error.set('Could not load logs.') });
  }
}
