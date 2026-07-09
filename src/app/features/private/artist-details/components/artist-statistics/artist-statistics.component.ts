import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtistDetails } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-statistics',
  templateUrl: './artist-statistics.component.html',
  styleUrl: './artist-statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistStatisticsComponent {
  readonly artist = input.required<ArtistDetails>();
}
