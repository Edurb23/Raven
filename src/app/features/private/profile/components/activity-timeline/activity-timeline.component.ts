import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileActivity } from '../../models/profile.models';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrl: './activity-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityTimelineComponent {
  readonly activity = input.required<ProfileActivity[]>();
}
