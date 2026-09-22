import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CurrentUserService } from '../../../core/services/current-user.service';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';

@Component({
  selector: 'app-profile',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    ProfileHeaderComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  protected readonly currentUser = inject(CurrentUserService);

  protected readonly accountDetails = computed(() => {
    const user = this.currentUser.user();

    if (!user) {
      return [];
    }

    return [
      { label: 'Email', value: user.email },
      { label: 'Username', value: user.username },
      { label: 'Status', value: user.status ? 'Active' : 'Inactive' },
      { label: 'User ID', value: user.id },
      { label: 'Created', value: this.formatDate(user.created_at) },
      { label: 'Updated', value: this.formatDate(user.update_at) }
    ];
  });
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Profile'
  }));

  constructor() {
    this.currentUser.loadCurrentUser().subscribe();
  }

  private formatDate(value: string): string {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(new Date(value));
  }
}
