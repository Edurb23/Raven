import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtistDetails } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-sidebar',
  templateUrl: './artist-sidebar.component.html',
  styleUrl: './artist-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistSidebarComponent {
  readonly artist = input.required<ArtistDetails>();
}
