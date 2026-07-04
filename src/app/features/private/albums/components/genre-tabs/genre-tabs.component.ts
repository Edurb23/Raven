import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-genre-tabs',
  templateUrl: './genre-tabs.component.html',
  styleUrl: './genre-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenreTabsComponent {
  readonly tabs = input.required<readonly string[]>();
  readonly selected = input.required<string>();
  readonly selectedChange = output<string>();
}
