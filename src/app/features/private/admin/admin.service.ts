import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../../../core/configs/api.config';
import { ApiArtistDetail } from '../artist-details/services/artist-details-data.service';

export interface AdminArtist { id: string; name: string; blocked: boolean; }
export interface ArtistEdit { artist: ApiArtistDetail; blocked: boolean; genreIds: string[]; }
export interface GenreOption { id: string; name: string; }
export interface FeatureFlag { key: string; description: string; enabled: boolean; updatedAt: string; }
export interface AdminLog { id: string; occurredAt: string; actorId: string | null; method: string; path: string; status: number; durationMs: number; }
export interface ArtistForm { name: string; bio: string; genres: string[]; }

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly base = API_BASE_URL + '/admin';
  artists(page: number) { return this.http.get<AdminArtist[]>(this.base + '/artists', { params: { page } }); }
  artist(id: string) { return this.http.get<ArtistEdit>(this.base + '/artists/' + encodeURIComponent(id)); }
  genres() { return this.http.get<GenreOption[]>(this.base + '/genres'); }
  save(id: string | null, data: ArtistForm) {
    return id ? this.http.put<ArtistEdit>(this.base + '/artists/' + encodeURIComponent(id), data)
      : this.http.post<ArtistEdit>(this.base + '/artists', data);
  }
  block(id: string, blocked: boolean) { return this.http.patch<ArtistEdit>(this.base + '/artists/' + encodeURIComponent(id) + '/blocked', { blocked }); }
  upload(id: string, file: File) {
    const data = new FormData(); data.append('file', file);
    return this.http.post(this.base + '/artists/' + encodeURIComponent(id) + '/images', data);
  }
  select(id: string, imageId: string) { return this.http.put(this.base + '/artists/' + encodeURIComponent(id) + '/images/' + encodeURIComponent(imageId) + '/select', {}); }
  uploadBanner(id: string, file: File) {
    const data = new FormData(); data.append('file', file);
    return this.http.post(this.base + '/artists/' + encodeURIComponent(id) + '/banner', data);
  }
  removeBanner(id: string) { return this.http.delete(this.base + '/artists/' + encodeURIComponent(id) + '/banner'); }
  flags() { return this.http.get<FeatureFlag[]>(this.base + '/flags'); }
  toggle(key: string, enabled: boolean) { return this.http.put<FeatureFlag[]>(this.base + '/flags/' + encodeURIComponent(key), { enabled }); }
  logs(page: number, errorsOnly: boolean) { return this.http.get<AdminLog[]>(this.base + '/logs', { params: { page, errorsOnly } }); }
}
