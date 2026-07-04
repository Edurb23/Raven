import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CollectionFilter } from '../../models/collection.models';

@Component({
  selector: 'app-collection-filters',
  templateUrl: './collection-filters.component.html',
  styleUrl: './collection-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionFiltersComponent {
  readonly filters = input.required<CollectionFilter[]>();
  readonly selected = input.required<CollectionFilter>();
  readonly selectedChange = output<CollectionFilter>();
}
