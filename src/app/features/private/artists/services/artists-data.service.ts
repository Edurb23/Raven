import { Injectable } from '@angular/core';
import { ARTIST_TABS, ARTISTS } from '../mock/artists.mock-data';

@Injectable({ providedIn: 'root' })
export class ArtistsDataService {
  readonly artists = ARTISTS;
  readonly tabs = ARTIST_TABS;
}
