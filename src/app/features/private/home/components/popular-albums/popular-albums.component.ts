import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeAlbum } from '../../models/home.models';

@Component({
  selector: 'app-popular-albums',
  templateUrl: './popular-albums.component.html',
  styleUrl: './popular-albums.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularAlbumsComponent {
  readonly albums = input.required<HomeAlbum[]>();
}
