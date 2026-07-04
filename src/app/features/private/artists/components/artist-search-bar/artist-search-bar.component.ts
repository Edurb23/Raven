import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-artist-search-bar',
  templateUrl: './artist-search-bar.component.html',
  styleUrl: './artist-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistSearchBarComponent {
  readonly value = input.required<string>();
  readonly valueChange = output<string>();
}
