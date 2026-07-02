import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-link',
  imports: [RouterLink],
  templateUrl: './cta-link.component.html',
  styleUrl: './cta-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaLinkComponent {
  readonly label = input.required<string>();
  readonly route = input<string | readonly unknown[]>('/');
  readonly variant = input<'primary' | 'secondary'>('primary');
}
