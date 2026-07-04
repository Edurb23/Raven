import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileAlbum } from '../../models/profile.models';

@Component({
  selector: 'app-favorite-albums',
  templateUrl: './favorite-albums.component.html',
  styleUrl: './favorite-albums.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteAlbumsComponent {
  readonly albums = input.required<ProfileAlbum[]>();
}
