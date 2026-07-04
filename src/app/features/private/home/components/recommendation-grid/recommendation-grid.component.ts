import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeAlbum } from '../../models/home.models';

@Component({
  selector: 'app-recommendation-grid',
  templateUrl: './recommendation-grid.component.html',
  styleUrl: './recommendation-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationGridComponent {
  readonly albums = input.required<HomeAlbum[]>();
}
