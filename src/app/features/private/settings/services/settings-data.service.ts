import { Injectable } from '@angular/core';
import { SETTINGS_SECTIONS } from '../mock/settings.mock-data';

@Injectable({ providedIn: 'root' })
export class SettingsDataService {
  readonly sections = SETTINGS_SECTIONS;
}
