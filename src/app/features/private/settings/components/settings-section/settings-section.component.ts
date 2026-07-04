import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SettingsSection } from '../../models/settings.models';
import { SettingsCardComponent } from '../settings-card/settings-card.component';

@Component({
  selector: 'app-settings-section',
  imports: [SettingsCardComponent],
  templateUrl: './settings-section.component.html',
  styleUrl: './settings-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSectionComponent {
  readonly section = input.required<SettingsSection>();
}
