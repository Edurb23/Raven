import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProfileUser } from '../../models/profile.models';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderComponent {
  readonly user = input.required<ProfileUser>();
}
