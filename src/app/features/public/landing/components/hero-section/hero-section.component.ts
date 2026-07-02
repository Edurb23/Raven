import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CtaLinkComponent } from '../../../../../shared/components/cta-link/cta-link.component';

@Component({
  selector: 'app-hero-section',
  imports: [CtaLinkComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {}
