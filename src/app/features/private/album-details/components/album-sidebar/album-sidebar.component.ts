import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AlbumDetails } from '../../models/album-details.models';

@Component({
  selector: 'app-album-sidebar',
  templateUrl: './album-sidebar.component.html',
  styleUrl: './album-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumSidebarComponent {
  readonly album = input.required<AlbumDetails>();
  readonly listenNow = output<void>();
}
