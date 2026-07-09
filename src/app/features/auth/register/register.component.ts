import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly isSubmitting = signal(false);
  readonly toastMessage = signal('');
  readonly toastType = signal<'success' | 'error'>('success');

  readonly registerForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    }),
    terms: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue]
    })
  });

  submit(): void {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid || this.isSubmitting()) {
      return;
    }

    this.toastMessage.set('');
    this.isSubmitting.set(true);

    const { name, email, password } = this.registerForm.getRawValue();

    this.authService
      .register({
        username: name.trim(),
        email: email.trim(),
        password
      })
      .pipe(finalize(() => this.isSubmitting.set(false)))
      .subscribe({
        next: (user) => {
          this.toastType.set('success');
          this.toastMessage.set(`Account created for ${user.username}. Redirecting to Raven.`);
          this.registerForm.reset({
            name: '',
            email: '',
            password: '',
            terms: false
          });

          setTimeout(() => {
            void this.router.navigateByUrl('/app');
          }, 850);
        },
        error: (error: HttpErrorResponse) => {
          this.toastType.set('error');
          this.toastMessage.set(
            typeof error.error?.message === 'string'
              ? error.error.message
              : 'Could not create your account. Check the API and try again.'
          );
        }
      });
  }
}
