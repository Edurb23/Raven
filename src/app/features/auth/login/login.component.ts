import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly isSubmitting = signal(false);
  readonly toastMessage = signal('');
  readonly toastType = signal<'success' | 'error'>('success');

  readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    }),
    remember: new FormControl(true, { nonNullable: true })
  });

  submit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid || this.isSubmitting()) {
      return;
    }

    this.toastMessage.set('');
    this.isSubmitting.set(true);

    const { email, password, remember } = this.loginForm.getRawValue();

    this.authService
      .login({
        email: email.trim(),
        password
      })
      .pipe(finalize(() => this.isSubmitting.set(false)))
      .subscribe({
        next: ({ token }) => {
          this.authService.saveToken(token, remember);
          this.toastType.set('success');
          this.toastMessage.set('Welcome back. Redirecting to Raven.');

          setTimeout(() => {
            void this.router.navigateByUrl('/app');
          }, 650);
        },
        error: (error: HttpErrorResponse) => {
          this.toastType.set('error');
          this.toastMessage.set(
            typeof error.error?.message === 'string'
              ? error.error.message
              : 'Could not log in. Check your email and password.'
          );
        }
      });
  }
}
