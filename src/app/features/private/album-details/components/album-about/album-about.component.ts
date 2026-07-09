import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AlbumDetails } from '../../models/album-details.models';

@Component({
  selector: 'app-album-about',
  templateUrl: './album-about.component.html',
  styleUrl: './album-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumAboutComponent {
  readonly album = input.required<AlbumDetails>();
}
