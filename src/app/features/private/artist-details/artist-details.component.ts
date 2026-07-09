import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { ArtistAboutComponent } from './components/artist-about/artist-about.component';
import { ArtistAlbumsComponent } from './components/artist-albums/artist-albums.component';
import { ArtistCommunityComponent } from './components/artist-community/artist-community.component';
import { ArtistHeroComponent } from './components/artist-hero/artist-hero.component';
import { ArtistNewsComponent } from './components/artist-news/artist-news.component';
import { ArtistReviewCardComponent } from './components/artist-review-card/artist-review-card.component';
import { ArtistSidebarComponent } from './components/artist-sidebar/artist-sidebar.component';
import { ArtistStatisticsComponent } from './components/artist-statistics/artist-statistics.component';
import { ArtistTabsComponent } from './components/artist-tabs/artist-tabs.component';
import { ArtistDetailTab } from './models/artist-details.models';
import { ArtistDetailsDataService } from './services/artist-details-data.service';

@Component({
  selector: 'app-artist-details',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    ArtistHeroComponent,
    ArtistTabsComponent,
    ArtistStatisticsComponent,
    ArtistAlbumsComponent,
    ArtistCommunityComponent,
    ArtistNewsComponent,
    ArtistReviewCardComponent,
    ArtistSidebarComponent,
    ArtistAboutComponent
  ],
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistDetailsComponent {
  private readonly artistData = inject(ArtistDetailsDataService);

  protected readonly artist = this.artistData.artist;
  protected readonly tabs = this.artistData.tabs;
  protected readonly selectedTab = signal<ArtistDetailTab>('Overview');
  protected readonly reviewFilters = ['Most Recent', 'Highest Rated', 'Most Helpful', 'Lowest Rated'];
  protected readonly selectedReviewFilter = signal('Most Recent');
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Artists'
  }));

  protected readonly filteredReviews = computed(() => {
    const reviews = [...this.artist.reviews];
    const filter = this.selectedReviewFilter();

    if (filter === 'Highest Rated') {
      return reviews.sort((a, b) => b.rating - a.rating);
    }

    if (filter === 'Most Helpful') {
      return reviews.sort((a, b) => b.likes + b.comments - (a.likes + a.comments));
    }

    if (filter === 'Lowest Rated') {
      return reviews.sort((a, b) => a.rating - b.rating);
    }

    return reviews;
  });

  protected selectTab(tab: ArtistDetailTab): void {
    this.selectedTab.set(tab);
  }

  protected selectReviewFilter(filter: string): void {
    this.selectedReviewFilter.set(filter);
  }
}
