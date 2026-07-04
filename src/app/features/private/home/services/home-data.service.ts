import { Injectable } from '@angular/core';
import { HOME_DATA, HOME_NAVIGATION } from '../mock/home.mock-data';

@Injectable({ providedIn: 'root' })
export class HomeDataService {
  readonly data = HOME_DATA;
  readonly navigation = HOME_NAVIGATION;
}
