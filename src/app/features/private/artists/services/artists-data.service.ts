import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EMPTY, expand, map, reduce } from 'rxjs';
import { API_BASE_URL } from '../../../../core/configs/api.config';
import { ARTIST_TABS } from '../mock/artists.mock-data';
import { ApiArtistImage, ApiArtistListItem, CatalogArtist } from '../models/artist.models';

@Injectable({ providedIn: 'root' })
export class ArtistsDataService {
  private readonly http = inject(HttpClient);

  readonly tabs = ARTIST_TABS;

  listArtists() {
    const pageSize = 20;
    const loadPage = (page: number) => this.http.get<ApiArtistListItem[]>(`${API_BASE_URL}/artist`, {
      params: { page, size: pageSize, sort: ['name,asc', 'id,asc'] }
    });

    return loadPage(0).pipe(
      expand((artists, page) => artists.length === pageSize ? loadPage(page + 1) : EMPTY),
      reduce((all, page) => all.concat(page), [] as ApiArtistListItem[]),
      map((artists) => artists.map((artist) => this.toCatalogArtist(artist)))
    );
  }

  private toCatalogArtist(artist: ApiArtistListItem): CatalogArtist {
    return {
      id: artist.idd,
      name: artist.name,
      genres: artist.genres ?? [],
      image: this.resolveImage(artist.artistImages),
      albumCount: 0,
      followers: 'New',
      latestRelease: artist.bio || '',
      topAlbums: []
    };
  }

  resolveImage(images: ApiArtistImage[]): string {
    const available = images?.filter((image) => image.urlImage?.trim());
    const selected = available?.find((image) => image.selected) ?? available?.[0];
    return this.resolveImageSource(selected?.urlImage);
  }

  resolveImageSource(source: string | null | undefined): string {
    const image = source?.trim();

    if (!image) {
      return '';
    }

    // JPEG Base64 starts with /9j/ and must not be treated as a URL path.
    const base64 = image.replace(/\s/g, '');
    const mimeType = base64.startsWith('/9j/') ? 'image/jpeg'
      : base64.startsWith('iVBORw0KGgo') ? 'image/png'
      : base64.startsWith('R0lGOD') ? 'image/gif'
      : base64.startsWith('UklGR') ? 'image/webp'
      : null;

    if (mimeType) {
      return `data:${mimeType};base64,${base64}`;
    }

    if (image.startsWith('data:') || image.startsWith('http') || image.startsWith('/')) {
      return image;
    }

    return `data:image/jpeg;base64,${base64}`;
  }
}
