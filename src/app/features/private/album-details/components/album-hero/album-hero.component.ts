import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AlbumDetails } from '../../models/album-details.models';

@Component({
  selector: 'app-album-hero',
  templateUrl: './album-hero.component.html',
  styleUrl: './album-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumHeroComponent {
  readonly album = input.required<AlbumDetails>();
}
