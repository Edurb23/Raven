import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SettingItem } from '../../models/settings.models';
import { SettingsInputComponent } from '../settings-input/settings-input.component';
import { SettingsSelectComponent } from '../settings-select/settings-select.component';
import { SettingsSwitchComponent } from '../settings-switch/settings-switch.component';

@Component({
  selector: 'app-settings-card',
  imports: [SettingsInputComponent, SettingsSelectComponent, SettingsSwitchComponent],
  templateUrl: './settings-card.component.html',
  styleUrl: './settings-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsCardComponent {
  readonly item = input.required<SettingItem>();
}
