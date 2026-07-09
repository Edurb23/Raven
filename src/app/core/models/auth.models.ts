export interface RegisterUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserDetailResponse {
  id: string;
  username: string;
  email: string;
  status: boolean;
  created_at: string;
  update_at: string;
}
