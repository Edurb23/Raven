import { Injectable } from '@angular/core';
import { ACTIVITY_FEED, ACTIVITY_FILTERS, ACTIVITY_WIDGETS } from '../mock/activity.mock-data';

@Injectable({ providedIn: 'root' })
export class ActivityDataService {
  readonly activities = ACTIVITY_FEED;
  readonly filters = ACTIVITY_FILTERS;
  readonly widgets = ACTIVITY_WIDGETS;
}
