import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArtistAlbum } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrl: './artist-albums.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistAlbumsComponent {
  readonly albums = input.required<ArtistAlbum[]>();

  protected readonly groupedAlbums = computed(() => {
    const groups = new Map<number, ArtistAlbum[]>();

    for (const album of this.albums()) {
      groups.set(album.year, [...(groups.get(album.year) ?? []), album]);
    }

    return [...groups.entries()]
      .sort(([yearA], [yearB]) => yearB - yearA)
      .map(([year, albums]) => ({ year, albums }));
  });
}
