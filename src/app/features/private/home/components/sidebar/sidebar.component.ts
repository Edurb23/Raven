import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeNavigationItem } from '../../models/home.models';

@Component({
  selector: 'app-home-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  readonly items = input.required<HomeNavigationItem[]>();

  protected mainItems(): HomeNavigationItem[] {
    return this.items().filter((item) => item.label !== 'Profile' && item.label !== 'Settings');
  }

  protected bottomItems(): HomeNavigationItem[] {
    return this.items().filter((item) => item.label === 'Profile' || item.label === 'Settings');
  }
}
