import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import { API_BASE_URL } from '../configs/api.config';
import { UserDetailResponse } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  private readonly http = inject(HttpClient);
  private readonly userState = signal<UserDetailResponse | null>(null);
  private readonly loadingState = signal(false);
  private readonly errorState = signal('');
  private hasLoaded = false;

  readonly user = this.userState.asReadonly();
  readonly isLoading = this.loadingState.asReadonly();
  readonly errorMessage = this.errorState.asReadonly();
  readonly displayName = computed(() => this.userState()?.username ?? 'Collector');
  readonly username = computed(() => {
    const username = this.userState()?.username;
    return username ? `@${username}` : '@collector';
  });
  readonly avatarInitial = computed(() => this.displayName().trim().charAt(0).toUpperCase() || 'R');

  clearUser(): void {
    this.userState.set(null);
    this.hasLoaded = false;
    this.errorState.set('');
  }

  loadCurrentUser(force = false) {
    const currentUser = this.userState();

    if (currentUser && this.hasLoaded && !force) {
      return of(currentUser);
    }

    this.loadingState.set(true);
    this.errorState.set('');

    return this.http.get<UserDetailResponse>(`${API_BASE_URL}/user/me`).pipe(
      tap((user) => {
        this.userState.set(user);
        this.hasLoaded = true;
      }),
      catchError(() => {
        this.userState.set(null);
        this.errorState.set('Sorry, we could not load your account.');
        return of(null);
      }),
      finalize(() => this.loadingState.set(false))
    );
  }
}
