import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CatalogArtist } from '../../models/artist.models';
import { ArtistCardComponent } from '../artist-card/artist-card.component';

@Component({
  selector: 'app-artist-grid',
  imports: [ArtistCardComponent],
  templateUrl: './artist-grid.component.html',
  styleUrl: './artist-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistGridComponent {
  readonly artists = input.required<CatalogArtist[]>();
  readonly azMode = input(false);
  readonly groupedArtists = input.required<{ letter: string; artists: CatalogArtist[] }[]>();
}
