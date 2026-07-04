import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MusicCollection } from '../../models/collection.models';
import { CollectionCardComponent } from '../collection-card/collection-card.component';

@Component({
  selector: 'app-collection-section',
  imports: [CollectionCardComponent],
  templateUrl: './collection-section.component.html',
  styleUrl: './collection-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionSectionComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly collections = input.required<MusicCollection[]>();
}
