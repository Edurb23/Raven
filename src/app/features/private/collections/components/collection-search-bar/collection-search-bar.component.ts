import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-collection-search-bar',
  templateUrl: './collection-search-bar.component.html',
  styleUrl: './collection-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionSearchBarComponent {
  readonly value = input.required<string>();
  readonly valueChange = output<string>();
}
