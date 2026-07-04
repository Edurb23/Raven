import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CatalogAlbum } from '../../models/album.models';
import { AlbumCardComponent } from '../album-card/album-card.component';

@Component({
  selector: 'app-album-grid',
  imports: [AlbumCardComponent],
  templateUrl: './album-grid.component.html',
  styleUrl: './album-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumGridComponent {
  readonly albums = input.required<CatalogAlbum[]>();
  readonly azMode = input(false);
  readonly groupedAlbums = input.required<{ letter: string; albums: CatalogAlbum[] }[]>();
}
