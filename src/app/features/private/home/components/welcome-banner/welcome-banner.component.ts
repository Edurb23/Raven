import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeStat } from '../../models/home.models';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrl: './welcome-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeBannerComponent {
  readonly stats = input.required<HomeStat[]>();
}
