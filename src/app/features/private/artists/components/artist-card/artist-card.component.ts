import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogArtist } from '../../models/artist.models';

@Component({
  selector: 'app-catalog-artist-card',
  imports: [RouterLink],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent {
  readonly artist = input.required<CatalogArtist>();
  protected readonly failedImage = signal<string | null>(null);
}
