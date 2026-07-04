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
    path: 'app/albums',
    loadComponent: () =>
      import('./features/private/albums/albums.component').then(
        (component) => component.AlbumsComponent
      )
  },
  {
    path: 'app/artists',
    loadComponent: () =>
      import('./features/private/artists/artists.component').then(
        (component) => component.ArtistsComponent
      )
  },
  {
    path: 'app/activity',
    loadComponent: () =>
      import('./features/private/activity/activity.component').then(
        (component) => component.ActivityComponent
      )
  },
  {
    path: 'app/collections',
    loadComponent: () =>
      import('./features/private/collections/collections.component').then(
        (component) => component.CollectionsComponent
      )
  },
  {
    path: 'app/profile',
    loadComponent: () =>
      import('./features/private/profile/profile.component').then(
        (component) => component.ProfileComponent
      )
  },
  {
    path: 'app/settings',
    loadComponent: () =>
      import('./features/private/settings/settings.component').then(
        (component) => component.SettingsComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
