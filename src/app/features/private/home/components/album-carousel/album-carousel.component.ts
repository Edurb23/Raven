import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeAlbum } from '../../models/home.models';

@Component({
  selector: 'app-album-carousel',
  templateUrl: './album-carousel.component.html',
  styleUrl: './album-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumCarouselComponent {
  readonly albums = input.required<HomeAlbum[]>();
}
