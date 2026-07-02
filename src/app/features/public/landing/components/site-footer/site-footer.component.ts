import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BrandMarkComponent } from '../../../../../shared/components/brand-mark/brand-mark.component';

interface FooterLink {
  readonly label: string;
  readonly href?: string;
  readonly route?: string;
}

interface FooterGroup {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

@Component({
  selector: 'app-site-footer',
  imports: [BrandMarkComponent, RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteFooterComponent {
  protected readonly footerGroups: readonly FooterGroup[] = [
    {
      title: 'Product',
      links: [
        { label: 'Discover', href: '#trending' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Collections', href: '#collections' }
      ]
    },
    {
      title: 'Account',
      links: [
        { label: 'Log in', route: '/login' },
        { label: 'Register', route: '/register' },
        { label: 'Future app', route: '/app' }
      ]
    },
    {
      title: 'Project',
      links: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'API Docs', href: '/app' },
        { label: 'Swagger', href: '/app' }
      ]
    }
  ];
}
