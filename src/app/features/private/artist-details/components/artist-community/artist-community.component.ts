import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtistDetails } from '../../models/artist-details.models';
import { ArtistReviewCardComponent } from '../artist-review-card/artist-review-card.component';

@Component({
  selector: 'app-artist-community',
  imports: [ArtistReviewCardComponent],
  templateUrl: './artist-community.component.html',
  styleUrl: './artist-community.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCommunityComponent {
  readonly artist = input.required<ArtistDetails>();
}
