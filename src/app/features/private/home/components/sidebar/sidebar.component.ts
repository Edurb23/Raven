import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CurrentUserService } from '../../../../../core/services/current-user.service';
import { HomeNavigationItem } from '../../models/home.models';

@Component({
  selector: 'app-home-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  private readonly user = inject(CurrentUserService);
  private readonly router = inject(Router);
  private adminItem(): HomeNavigationItem {
    return { label: 'Admin', route: '/app/admin', active: this.router.url.startsWith('/app/admin'),
      iconPath: 'M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6' };
  }
  readonly items = input.required<HomeNavigationItem[]>();

  protected mainItems(): HomeNavigationItem[] {
    return this.items().filter((item) => item.label !== 'Profile' && item.label !== 'Settings');
  }

  protected bottomItems(): HomeNavigationItem[] {
    const items = this.items().filter((item) => item.label === 'Profile' || item.label === 'Settings');
    return this.user.isAdmin() ? [this.adminItem(), ...items] : items;
  }

  protected mobileItems(): HomeNavigationItem[] {
    return this.user.isAdmin() ? [...this.items().slice(0, 5), this.adminItem()] : this.items().slice(0, 5);
  }
}
