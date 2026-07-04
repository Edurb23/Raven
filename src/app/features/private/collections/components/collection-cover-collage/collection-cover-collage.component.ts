import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-collection-cover-collage',
  templateUrl: './collection-cover-collage.component.html',
  styleUrl: './collection-cover-collage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionCoverCollageComponent {
  readonly covers = input.required<string[]>();
  readonly title = input.required<string>();
}
