import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-album-search-bar',
  templateUrl: './album-search-bar.component.html',
  styleUrl: './album-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumSearchBarComponent {
  readonly value = input.required<string>();
  readonly valueChange = output<string>();
}
