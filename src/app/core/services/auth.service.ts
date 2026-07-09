import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../configs/api.config';
import { RegisterUserRequest, UserDetailResponse } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  register(payload: RegisterUserRequest) {
    return this.http.post<UserDetailResponse>(`${API_BASE_URL}/user/register`, payload);
  }
}
