import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ArtistDetailTab } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-tabs',
  templateUrl: './artist-tabs.component.html',
  styleUrl: './artist-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistTabsComponent {
  readonly tabs = input.required<ArtistDetailTab[]>();
  readonly selected = input.required<ArtistDetailTab>();
  readonly selectedChange = output<ArtistDetailTab>();
}
