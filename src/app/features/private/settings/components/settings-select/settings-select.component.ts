import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SettingOption } from '../../models/settings.models';

@Component({
  selector: 'app-settings-select',
  templateUrl: './settings-select.component.html',
  styleUrl: './settings-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSelectComponent {
  readonly value = input<string | boolean | undefined>('');
  readonly options = input.required<SettingOption[]>();
}
