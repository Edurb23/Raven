import { Injectable } from '@angular/core';
import { ALBUM_TABS, ALBUMS } from '../mock/albums.mock-data';

@Injectable({ providedIn: 'root' })
export class AlbumsDataService {
  readonly albums = ALBUMS;
  readonly tabs = ALBUM_TABS;
}
