import { Injectable } from '@angular/core';
import { ARTIST_DETAILS, ARTIST_DETAIL_TABS } from '../mock/artist-details.mock-data';

@Injectable({ providedIn: 'root' })
export class ArtistDetailsDataService {
  readonly artist = ARTIST_DETAILS;
  readonly tabs = ARTIST_DETAIL_TABS;
}
