import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_BASE_URL } from '../../../../core/configs/api.config';
import { ARTIST_TABS } from '../mock/artists.mock-data';
import { ApiArtistImage, ApiArtistListItem, ArtistGenre, CatalogArtist } from '../models/artist.models';

@Injectable({ providedIn: 'root' })
export class ArtistsDataService {
  private readonly http = inject(HttpClient);

  readonly tabs = ARTIST_TABS;

  listArtists() {
    return this.http
      .get<ApiArtistListItem[]>(`${API_BASE_URL}/artist`)
      .pipe(map((artists) => artists.map((artist) => this.toCatalogArtist(artist))));
  }

  private toCatalogArtist(artist: ApiArtistListItem): CatalogArtist {
    const genre = this.resolveGenre(artist.genres);

    return {
      id: artist.idd,
      name: artist.name,
      genre,
      image: this.resolveImage(artist.artistImages),
      albumCount: 0,
      followers: 'New',
      latestRelease: artist.bio || 'Discography coming soon',
      topAlbums: []
    };
  }

  private resolveGenre(genres: string[]): ArtistGenre {
    const primaryGenre = genres?.[0] ?? 'Indie';
    const supported = this.tabs.filter((tab) => tab !== 'All' && tab !== 'A-Z');

    return (supported.includes(primaryGenre as ArtistGenre) ? primaryGenre : 'Indie') as ArtistGenre;
  }

  private resolveImage(images: ApiArtistImage[]): string {
    const selected = images?.find((image) => image.selected) ?? images?.[0];
    const image = selected?.urlImage;

    if (!image) {
      return '/raven/collection-covers/Kendrick_Lamar_-_GNX.png';
    }

    if (image.startsWith('data:') || image.startsWith('http') || image.startsWith('/')) {
      return image;
    }

    return `data:image/jpeg;base64,${image}`;
  }
}
