import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { SettingsSectionComponent } from './components/settings-section/settings-section.component';
import { SettingsSidebarComponent } from './components/settings-sidebar/settings-sidebar.component';
import { SettingsDataService } from './services/settings-data.service';

@Component({
  selector: 'app-settings',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    SettingsSidebarComponent,
    SettingsSectionComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  private readonly settingsData = inject(SettingsDataService);

  protected readonly sections = this.settingsData.sections;
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Settings'
  }));
}
