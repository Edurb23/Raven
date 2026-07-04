import { Injectable } from '@angular/core';
import { COLLECTION_FILTERS, COLLECTIONS } from '../mock/collections.mock-data';

@Injectable({ providedIn: 'root' })
export class CollectionsDataService {
  readonly collections = COLLECTIONS;
  readonly filters = COLLECTION_FILTERS;
}
