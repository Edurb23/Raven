import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CatalogAlbum } from '../../models/album.models';

@Component({
  selector: 'app-catalog-album-card',
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumCardComponent {
  readonly album = input.required<CatalogAlbum>();
}
