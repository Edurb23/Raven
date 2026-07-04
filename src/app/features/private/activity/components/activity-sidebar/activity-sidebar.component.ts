import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ActivityWidgetItem, ActivityWidgets } from '../../models/activity.models';

@Component({
  selector: 'app-activity-sidebar',
  templateUrl: './activity-sidebar.component.html',
  styleUrl: './activity-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitySidebarComponent {
  readonly widgets = input.required<ActivityWidgets>();

  protected widgetEntries(): { title: string; items: ActivityWidgetItem[] }[] {
    return [
      { title: 'Recent Followers', items: this.widgets().recentFollowers },
      { title: 'Trending Albums', items: this.widgets().trendingAlbums },
      { title: 'Popular Reviews', items: this.widgets().popularReviews },
      { title: 'Upcoming Releases', items: this.widgets().upcomingReleases }
    ];
  }
}
