import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { ArtistHeroComponent } from './components/artist-hero/artist-hero.component';
import { ArtistTabsComponent } from './components/artist-tabs/artist-tabs.component';
import { ArtistDetailTab } from './models/artist-details.models';
import { ArtistDetailsDataService, ArtistPage } from './services/artist-details-data.service';
import { ArtistImageGalleryComponent } from './components/artist-image-gallery/artist-image-gallery.component';
import { ArtistsDataService } from '../artists/services/artists-data.service';

interface ArtistPageState {
  artist: ArtistPage | null;
  loading: boolean;
  error: string;
}
const loadingState: ArtistPageState = { artist: null, loading: true, error: '' };

@Component({
  selector: 'app-artist-details',
  imports: [SidebarComponent, TopBarComponent, ArtistHeroComponent, ArtistTabsComponent, ArtistImageGalleryComponent, RouterLink],
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistDetailsComponent {
  private readonly artistData = inject(ArtistDetailsDataService);
  private readonly route = inject(ActivatedRoute);
  private readonly images = inject(ArtistsDataService);
  protected readonly isPhotosPage = this.route.snapshot?.data?.['view'] === 'photos';
  protected readonly photoPreviews = computed(() => (this.state().artist?.artistImages ?? []).slice(0, 3)
    .map(image => ({ id: image.id, src: this.images.resolveImage([image]) })));
  protected readonly tabs = this.artistData.tabs;
  protected readonly selectedTab = signal<ArtistDetailTab>('Overview');
  protected readonly selectedPhoto = signal<string | null>(null);
  protected readonly navigation = HOME_NAVIGATION.map(item => ({ ...item, active: item.label === 'Artists' }));
  protected readonly state = toSignal(this.route.paramMap.pipe(
    map(params => params.get('id') ?? ''),
    distinctUntilChanged(),
    switchMap(id => {
      this.selectedTab.set('Overview');
      this.selectedPhoto.set(null);
      return this.artistData.getArtist(id).pipe(
        map((artist): ArtistPageState => ({ artist, loading: false, error: '' })),
        catchError(error => of<ArtistPageState>({
          artist: null, loading: false,
          error: error.status === 404 ? 'Artist not found.' : error.status === 503 ? 'Artist pages are temporarily unavailable.' : 'Unable to load this artist. Please try again.'
        })),
        startWith(loadingState)
      );
    })
  ), { initialValue: loadingState });
}
