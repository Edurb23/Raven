import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { UserCollection } from '../../../../../core/models/landing.models';

@Component({
  selector: 'app-collection-card',
  imports: [],
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionCardComponent {
  readonly collection = input.required<UserCollection>();
}
