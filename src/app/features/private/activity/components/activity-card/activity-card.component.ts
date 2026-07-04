import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ActivityEntity, ActivityType } from '../../models/activity.models';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityCardComponent {
  readonly activity = input.required<ActivityEntity>();

  protected iconFor(type: ActivityType): string {
    const icons: Record<ActivityType, string> = {
      review: '★',
      like: '♡',
      collection: '▦',
      album_added: '+',
      follow: '◌',
      artist_news: '♪',
      new_release: '◉',
      trending_review: '↗'
    };

    return icons[type];
  }
}
