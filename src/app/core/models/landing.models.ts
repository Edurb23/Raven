export interface LandingNavItem {
  readonly label: string;
  readonly fragment: string;
}

export interface AlbumPreview {
  readonly title: string;
  readonly artist: string;
  readonly mood: string;
  readonly visualClass: string;
  readonly alt: string;
}

export interface ArtistPreview {
  readonly name: string;
  readonly genre: string;
  readonly listeners: string;
  readonly visualClass: string;
}

export interface CommunityReview {
  readonly albumTitle: string;
  readonly artistName: string;
  readonly coverImagePath: string;
  readonly rating: string;
  readonly reviewerName: string;
  readonly reviewerInitials: string;
  readonly reviewerAvatarClass: string;
  readonly publishedAt: string;
  readonly text: string;
  readonly likeCount: string;
  readonly commentCount: string;
  readonly tags: readonly string[];
  readonly verified: boolean;
}

export interface CommunityStat {
  readonly label: string;
  readonly value: string;
}

export interface CommunityStats {
  readonly stats: readonly CommunityStat[];
  readonly trendingReviews: readonly string[];
}

export interface UserCollection {
  readonly title: string;
  readonly curator: string;
  readonly count: string;
  readonly description: string;
  readonly coverImagePaths: readonly string[];
  readonly extraAlbumCount: string;
}
