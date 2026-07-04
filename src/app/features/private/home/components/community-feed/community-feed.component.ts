import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeActivity } from '../../models/home.models';

@Component({
  selector: 'app-community-feed',
  templateUrl: './community-feed.component.html',
  styleUrl: './community-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityFeedComponent {
  readonly activity = input.required<HomeActivity[]>();
}
