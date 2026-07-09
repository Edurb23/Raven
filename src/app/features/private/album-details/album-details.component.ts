import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { AlbumAboutComponent } from './components/album-about/album-about.component';
import { AlbumHeroComponent } from './components/album-hero/album-hero.component';
import { AlbumReviewComposerComponent } from './components/album-review-composer/album-review-composer.component';
import { AlbumReviewCardComponent } from './components/album-review-card/album-review-card.component';
import { AlbumSidebarComponent } from './components/album-sidebar/album-sidebar.component';
import { AlbumTabsComponent } from './components/album-tabs/album-tabs.component';
import { AlbumTracksComponent } from './components/album-tracks/album-tracks.component';
import { RelatedAlbumsComponent } from './components/related-albums/related-albums.component';
import { AlbumDetailTab } from './models/album-details.models';
import { AlbumDetailsDataService } from './services/album-details-data.service';

@Component({
  selector: 'app-album-details',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    AlbumHeroComponent,
    AlbumTabsComponent,
    AlbumTracksComponent,
    AlbumAboutComponent,
    AlbumSidebarComponent,
    AlbumReviewComposerComponent,
    AlbumReviewCardComponent,
    RelatedAlbumsComponent
  ],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumDetailsComponent {
  private readonly albumData = inject(AlbumDetailsDataService);

  protected readonly album = this.albumData.album;
  protected readonly tabs = this.albumData.tabs;
  protected readonly selectedTab = signal<AlbumDetailTab>('Overview');
  protected readonly reviewFilters = ['Most Recent', 'Highest Rated', 'Most Helpful'];
  protected readonly selectedReviewFilter = signal('Most Recent');
  protected readonly listenModalOpen = signal(false);
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Albums'
  }));

  protected readonly filteredReviews = computed(() => {
    const reviews = [...this.album.reviews];
    const filter = this.selectedReviewFilter();

    if (filter === 'Highest Rated') {
      return reviews.sort((a, b) => b.rating - a.rating);
    }

    if (filter === 'Most Helpful') {
      return reviews.sort((a, b) => b.likes + b.comments - (a.likes + a.comments));
    }

    return reviews;
  });

  protected selectTab(tab: AlbumDetailTab): void {
    this.selectedTab.set(tab);
  }

  protected selectReviewFilter(filter: string): void {
    this.selectedReviewFilter.set(filter);
  }

  protected openListenModal(): void {
    this.listenModalOpen.set(true);
  }

  protected closeListenModal(): void {
    this.listenModalOpen.set(false);
  }
}
