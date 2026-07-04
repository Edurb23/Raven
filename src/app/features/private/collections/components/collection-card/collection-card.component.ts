import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MusicCollection } from '../../models/collection.models';
import { CollectionCoverCollageComponent } from '../collection-cover-collage/collection-cover-collage.component';

@Component({
  selector: 'app-collection-card',
  imports: [CollectionCoverCollageComponent],
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionCardComponent {
  readonly collection = input.required<MusicCollection>();
}
