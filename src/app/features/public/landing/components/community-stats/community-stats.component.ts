import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CommunityStats } from '../../../../../core/models/landing.models';

@Component({
  selector: 'app-community-stats',
  imports: [],
  templateUrl: './community-stats.component.html',
  styleUrl: './community-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityStatsComponent {
  readonly stats = input.required<CommunityStats>();
}
