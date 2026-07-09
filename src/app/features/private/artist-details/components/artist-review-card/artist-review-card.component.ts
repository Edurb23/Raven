import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtistReview } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-review-card',
  templateUrl: './artist-review-card.component.html',
  styleUrl: './artist-review-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistReviewCardComponent {
  readonly review = input.required<ArtistReview>();
}
