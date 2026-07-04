import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-settings-switch',
  templateUrl: './settings-switch.component.html',
  styleUrl: './settings-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSwitchComponent {
  readonly checked = input(false);
  readonly label = input.required<string>();
}
