import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';
import { ActivityFiltersComponent } from './components/activity-filters/activity-filters.component';
import { ActivitySidebarComponent } from './components/activity-sidebar/activity-sidebar.component';
import { ActivityFilter } from './models/activity.models';
import { ActivityDataService } from './services/activity-data.service';

@Component({
  selector: 'app-activity',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    ActivityFiltersComponent,
    ActivityFeedComponent,
    ActivitySidebarComponent
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent {
  private readonly activityData = inject(ActivityDataService);

  protected readonly filters = this.activityData.filters;
  protected readonly widgets = this.activityData.widgets;
  protected readonly selectedFilter = signal<ActivityFilter>('All');
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Activity'
  }));

  protected readonly filteredActivities = computed(() => {
    const selected = this.selectedFilter();

    if (selected === 'All') {
      return this.activityData.activities;
    }

    return this.activityData.activities.filter((activity) => activity.metadata.filter === selected);
  });

  protected selectFilter(filter: ActivityFilter): void {
    this.selectedFilter.set(filter);
  }
}
