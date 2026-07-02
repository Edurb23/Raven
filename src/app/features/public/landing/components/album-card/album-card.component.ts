import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { AlbumPreview } from '../../../../../core/models/landing.models';

@Component({
  selector: 'app-album-card',
  imports: [],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumCardComponent {
  readonly album = input.required<AlbumPreview>();
}
