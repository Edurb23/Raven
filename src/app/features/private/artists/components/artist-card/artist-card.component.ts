import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CatalogArtist } from '../../models/artist.models';

@Component({
  selector: 'app-catalog-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent {
  readonly artist = input.required<CatalogArtist>();
}
