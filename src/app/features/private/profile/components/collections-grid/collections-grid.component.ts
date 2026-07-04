import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileCollection } from '../../models/profile.models';

@Component({
  selector: 'app-profile-collections-grid',
  templateUrl: './collections-grid.component.html',
  styleUrl: './collections-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionsGridComponent {
  readonly collections = input.required<ProfileCollection[]>();
}
