import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AlbumReview } from '../../models/album-details.models';

@Component({
  selector: 'app-album-review-card',
  templateUrl: './album-review-card.component.html',
  styleUrl: './album-review-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumReviewCardComponent {
  readonly review = input.required<AlbumReview>();
}
