import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtistDetails } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-hero',
  templateUrl: './artist-hero.component.html',
  styleUrl: './artist-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistHeroComponent {
  readonly artist = input.required<ArtistDetails>();
}
