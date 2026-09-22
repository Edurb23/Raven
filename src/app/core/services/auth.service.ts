import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../configs/api.config';
import { LoginRequest, RegisterUserRequest, TokenResponse, UserDetailResponse } from '../models/auth.models';
import { CurrentUserService } from './current-user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly currentUser = inject(CurrentUserService);
  private readonly tokenStorageKey = 'raven_token';

  register(payload: RegisterUserRequest) {
    return this.http.post<UserDetailResponse>(`${API_BASE_URL}/user/register`, payload);
  }

  login(payload: LoginRequest) {
    return this.http.post<TokenResponse>(`${API_BASE_URL}/login`, payload);
  }

  saveToken(token: string, remember: boolean): void {
    this.currentUser.clearUser();

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(this.tokenStorageKey, this.normalizeToken(token));

    if (remember) {
      sessionStorage.removeItem(this.tokenStorageKey);
    } else {
      localStorage.removeItem(this.tokenStorageKey);
    }
  }

  logout(): void {
    this.currentUser.clearUser();
    localStorage.removeItem(this.tokenStorageKey);
    sessionStorage.removeItem(this.tokenStorageKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenStorageKey) ?? sessionStorage.getItem(this.tokenStorageKey);
  }

  private normalizeToken(token: string): string {
    return token.replace(/^Bearer\s+/i, '').trim();
  }
}
