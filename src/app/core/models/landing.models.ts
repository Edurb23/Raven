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
  readonly author: string;
  readonly album: string;
  readonly rating: string;
  readonly quote: string;
}

export interface UserCollection {
  readonly title: string;
  readonly curator: string;
  readonly count: string;
  readonly description: string;
}
