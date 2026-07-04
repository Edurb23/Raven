import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeArtist } from '../../models/home.models';

@Component({
  selector: 'app-home-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent {
  readonly artist = input.required<HomeArtist>();
}
