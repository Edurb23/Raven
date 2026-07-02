import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArtistPreview } from '../../../../../core/models/landing.models';

@Component({
  selector: 'app-artist-card',
  imports: [],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent {
  readonly artist = input.required<ArtistPreview>();
}
