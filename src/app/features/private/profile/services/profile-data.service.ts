import { Injectable } from '@angular/core';
import { PROFILE_DATA, PROFILE_TABS } from '../mock/profile.mock-data';

@Injectable({ providedIn: 'root' })
export class ProfileDataService {
  readonly profile = PROFILE_DATA;
  readonly tabs = PROFILE_TABS;
}
