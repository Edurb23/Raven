import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ActivityFilter } from '../../models/activity.models';

@Component({
  selector: 'app-activity-filters',
  templateUrl: './activity-filters.component.html',
  styleUrl: './activity-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityFiltersComponent {
  readonly filters = input.required<ActivityFilter[]>();
  readonly selected = input.required<ActivityFilter>();
  readonly selectedChange = output<ActivityFilter>();
}
