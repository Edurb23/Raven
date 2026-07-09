import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtistDetails } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-about',
  templateUrl: './artist-about.component.html',
  styleUrl: './artist-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistAboutComponent {
  readonly artist = input.required<ArtistDetails>();
}
