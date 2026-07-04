import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileArtist } from '../../models/profile.models';

@Component({
  selector: 'app-favorite-artists',
  templateUrl: './favorite-artists.component.html',
  styleUrl: './favorite-artists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteArtistsComponent {
  readonly artists = input.required<ProfileArtist[]>();
}
