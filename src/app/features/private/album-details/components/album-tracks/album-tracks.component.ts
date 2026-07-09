import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AlbumTrack } from '../../models/album-details.models';

@Component({
  selector: 'app-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrl: './album-tracks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumTracksComponent {
  readonly tracks = input.required<AlbumTrack[]>();
}
