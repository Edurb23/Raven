import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AlbumDetailTab } from '../../models/album-details.models';

@Component({
  selector: 'app-album-tabs',
  templateUrl: './album-tabs.component.html',
  styleUrl: './album-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumTabsComponent {
  readonly tabs = input.required<AlbumDetailTab[]>();
  readonly selected = input.required<AlbumDetailTab>();
  readonly selectedChange = output<AlbumDetailTab>();
}
