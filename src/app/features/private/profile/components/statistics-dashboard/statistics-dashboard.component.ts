import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileChart } from '../../models/profile.models';

@Component({
  selector: 'app-statistics-dashboard',
  templateUrl: './statistics-dashboard.component.html',
  styleUrl: './statistics-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsDashboardComponent {
  readonly charts = input.required<ProfileChart[]>();
}
