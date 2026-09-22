import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_BASE_URL } from '../../../../core/configs/api.config';
import { ApiArtistListItem } from '../../artists/models/artist.models';
import { ArtistsDataService } from '../../artists/services/artists-data.service';
import { ArtistDetailTab } from '../models/artist-details.models';

export interface ApiArtistDetail extends Omit<ApiArtistListItem, 'idd'> {
  id: string;
}
export interface ArtistPage extends ApiArtistDetail {
  photo: string;
  banner: string;
}
@Injectable({ providedIn: 'root' })
export class ArtistDetailsDataService {
  private readonly http = inject(HttpClient);
  private readonly artists = inject(ArtistsDataService);
  readonly tabs: ArtistDetailTab[] = ['Overview', 'Albums', 'Community', 'News', 'Reviews', 'About'];

  getArtist(id: string) {
    return this.http.get<ApiArtistDetail>(API_BASE_URL + '/artist/' + encodeURIComponent(id)).pipe(
      map((artist): ArtistPage => {
        const photo = this.artists.resolveImage(artist.artistImages);
        return { ...artist, genres: artist.genres ?? [], photo, banner: photo };
      })
    );
  }
}
