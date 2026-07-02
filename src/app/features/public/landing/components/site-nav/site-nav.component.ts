import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LandingNavItem } from '../../../../../core/models/landing.models';
import { BrandMarkComponent } from '../../../../../shared/components/brand-mark/brand-mark.component';

@Component({
  selector: 'app-site-nav',
  imports: [BrandMarkComponent, RouterLink],
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteNavComponent {
  readonly navItems = input.required<readonly LandingNavItem[]>();
}
