import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-settings-input',
  templateUrl: './settings-input.component.html',
  styleUrl: './settings-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsInputComponent {
  readonly value = input<string | boolean | undefined>('');
  readonly placeholder = input('');
  readonly textarea = input(false);
}
