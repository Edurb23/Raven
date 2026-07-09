import { Injectable } from '@angular/core';
import { ALBUM_DETAILS, ALBUM_DETAIL_TABS } from '../mock/album-details.mock-data';

@Injectable({ providedIn: 'root' })
export class AlbumDetailsDataService {
  readonly album = ALBUM_DETAILS;
  readonly tabs = ALBUM_DETAIL_TABS;
}
