import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GenreDistribution } from '../../models/profile.models';

@Component({
  selector: 'app-genre-chart',
  templateUrl: './genre-chart.component.html',
  styleUrl: './genre-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenreChartComponent {
  readonly genres = input.required<GenreDistribution[]>();
}
