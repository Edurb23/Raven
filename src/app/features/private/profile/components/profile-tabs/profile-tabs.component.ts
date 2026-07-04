import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrl: './profile-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileTabsComponent {
  readonly tabs = input.required<readonly string[]>();
  readonly selected = input.required<string>();
  readonly selectedChange = output<string>();
}
