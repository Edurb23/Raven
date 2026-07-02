import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BrandMarkComponent } from '../../../../../shared/components/brand-mark/brand-mark.component';

@Component({
  selector: 'app-site-footer',
  imports: [BrandMarkComponent, RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteFooterComponent {}
