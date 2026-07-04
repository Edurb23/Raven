import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ActivityEntity } from '../../models/activity.models';
import { ActivityCardComponent } from '../activity-card/activity-card.component';

@Component({
  selector: 'app-activity-feed',
  imports: [ActivityCardComponent],
  templateUrl: './activity-feed.component.html',
  styleUrl: './activity-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityFeedComponent {
  readonly activities = input.required<ActivityEntity[]>();
}
