import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CommunityReview } from '../../../../../core/models/landing.models';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewCardComponent {
  readonly review = input.required<CommunityReview>();
}
