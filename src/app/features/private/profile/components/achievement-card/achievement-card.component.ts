import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileAchievement } from '../../models/profile.models';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrl: './achievement-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementCardComponent {
  readonly achievement = input.required<ProfileAchievement>();
}
