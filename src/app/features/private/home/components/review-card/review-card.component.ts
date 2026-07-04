import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeReview } from '../../models/home.models';

@Component({
  selector: 'app-home-review-card',
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewCardComponent {
  readonly review = input.required<HomeReview>();
}
