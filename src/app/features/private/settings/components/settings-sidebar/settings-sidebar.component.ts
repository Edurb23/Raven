import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SettingsSection } from '../../models/settings.models';

@Component({
  selector: 'app-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrl: './settings-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSidebarComponent {
  readonly sections = input.required<SettingsSection[]>();
}
