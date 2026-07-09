import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RelatedAlbum } from '../../models/album-details.models';

@Component({
  selector: 'app-related-albums',
  templateUrl: './related-albums.component.html',
  styleUrl: './related-albums.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedAlbumsComponent {
  readonly albums = input.required<RelatedAlbum[]>();
}
