import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtistNewsItem } from '../../models/artist-details.models';

@Component({
  selector: 'app-artist-news',
  templateUrl: './artist-news.component.html',
  styleUrl: './artist-news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistNewsComponent {
  readonly news = input.required<ArtistNewsItem[]>();
}
