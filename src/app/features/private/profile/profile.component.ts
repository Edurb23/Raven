import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { AchievementCardComponent } from './components/achievement-card/achievement-card.component';
import { ActivityTimelineComponent } from './components/activity-timeline/activity-timeline.component';
import { CollectionDnaComponent } from './components/collection-dna/collection-dna.component';
import { CollectionsGridComponent } from './components/collections-grid/collections-grid.component';
import { FavoriteAlbumsComponent } from './components/favorite-albums/favorite-albums.component';
import { FavoriteArtistsComponent } from './components/favorite-artists/favorite-artists.component';
import { GenreChartComponent } from './components/genre-chart/genre-chart.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileStatsComponent } from './components/profile-stats/profile-stats.component';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { RecentReviewsComponent } from './components/recent-reviews/recent-reviews.component';
import { StatisticsDashboardComponent } from './components/statistics-dashboard/statistics-dashboard.component';
import { ProfileDataService } from './services/profile-data.service';

@Component({
  selector: 'app-profile',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    ProfileHeaderComponent,
    ProfileStatsComponent,
    ProfileTabsComponent,
    FavoriteArtistsComponent,
    FavoriteAlbumsComponent,
    CollectionDnaComponent,
    GenreChartComponent,
    RecentReviewsComponent,
    CollectionsGridComponent,
    ActivityTimelineComponent,
    AchievementCardComponent,
    StatisticsDashboardComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  private readonly profileData = inject(ProfileDataService);

  protected readonly data = this.profileData.profile;
  protected readonly tabs = this.profileData.tabs;
  protected readonly selectedTab = signal<string>('Overview');
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Profile'
  }));

  protected selectTab(tab: string): void {
    this.selectedTab.set(tab);
  }
}
