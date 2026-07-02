import { Injectable } from '@angular/core';

import {
  AlbumPreview,
  ArtistPreview,
  CommunityReview,
  LandingNavItem,
  UserCollection
} from '../models/landing.models';
import {
  FEATURED_ARTISTS,
  LANDING_NAV_ITEMS,
  TRENDING_ALBUMS,
  USER_COLLECTIONS,
  COMMUNITY_REVIEWS,
  COMMUNITY_STATS
} from './landing.mock-data';

@Injectable({ providedIn: 'root' })
export class LandingDataService {
  readonly navItems: readonly LandingNavItem[] = LANDING_NAV_ITEMS;
  readonly trendingAlbums: readonly AlbumPreview[] = TRENDING_ALBUMS;
  readonly featuredArtists: readonly ArtistPreview[] = FEATURED_ARTISTS;
  readonly communityReviews: readonly CommunityReview[] = COMMUNITY_REVIEWS;
  readonly communityStats = COMMUNITY_STATS;
  readonly userCollections: readonly UserCollection[] = USER_COLLECTIONS;
}
