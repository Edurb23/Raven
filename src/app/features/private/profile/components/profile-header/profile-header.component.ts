import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UserDetailResponse } from '../../../../../core/models/auth.models';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderComponent {
  readonly user = input.required<UserDetailResponse>();

  protected displayName(): string {
    return this.user().username;
  }

  protected username(): string {
    return `@${this.user().username}`;
  }

  protected initial(): string {
    return this.displayName().trim().charAt(0).toUpperCase() || 'R';
  }

  protected memberSince(): string {
    return `Member since ${new Date(this.user().created_at).getFullYear()}`;
  }

  protected statusLabel(): string {
    return this.user().status ? 'Active account' : 'Inactive account';
  }
}
