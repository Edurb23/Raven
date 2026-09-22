import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrentUserService } from '../../../../../core/services/current-user.service';

@Component({
  selector: 'app-home-top-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  protected readonly currentUser = inject(CurrentUserService);
  protected readonly notificationsOpen = signal(false);
  protected readonly notifications = [
    {
      type: 'Review',
      title: 'Maria reviewed GNX',
      description: 'She rated it 4.8 and mentioned the sequencing.',
      time: '8 min ago'
    },
    {
      type: 'Like',
      title: 'Lucas liked your review',
      description: 'Your note on Blonde is getting attention.',
      time: '24 min ago'
    },
    {
      type: 'Collection',
      title: 'Late Night Vinyl was updated',
      description: '3 albums were added by Raven collectors.',
      time: '1h ago'
    },
    {
      type: 'Release',
      title: 'New album from a favorite artist',
      description: 'A tracked artist has a new release to discover.',
      time: 'Today'
    }
  ];
  protected readonly notificationCountLabel = computed(() => {
    const count = this.notifications.length;

    return count > 4 ? '4+' : `${count}`;
  });

  constructor() {
    this.currentUser.loadCurrentUser().subscribe();
  }

  protected toggleNotifications(): void {
    this.notificationsOpen.update((open) => !open);
  }

  protected closeNotifications(): void {
    this.notificationsOpen.set(false);
  }
}
