import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileStat } from '../../models/profile.models';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrl: './profile-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStatsComponent {
  readonly stats = input.required<ProfileStat[]>();
}
