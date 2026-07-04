import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileDnaItem } from '../../models/profile.models';

@Component({
  selector: 'app-collection-dna',
  templateUrl: './collection-dna.component.html',
  styleUrl: './collection-dna.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionDnaComponent {
  readonly items = input.required<ProfileDnaItem[]>();
}
