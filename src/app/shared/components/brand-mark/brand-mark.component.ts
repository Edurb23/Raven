import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-mark',
  imports: [RouterLink],
  templateUrl: './brand-mark.component.html',
  styleUrl: './brand-mark.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandMarkComponent {
  readonly compact = input(false);
}
