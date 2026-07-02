import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/public/landing/landing.component').then(
        (component) => component.LandingComponent
      )
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (component) => component.LoginComponent
      )
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then(
        (component) => component.RegisterComponent
      )
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./features/private/shell/app-shell.component').then(
        (component) => component.AppShellComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
