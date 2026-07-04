import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileReview } from '../../models/profile.models';

@Component({
  selector: 'app-recent-reviews',
  templateUrl: './recent-reviews.component.html',
  styleUrl: './recent-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentReviewsComponent {
  readonly reviews = input.required<ProfileReview[]>();
}
