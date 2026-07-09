export type AlbumDetailTab = 'Overview' | 'Tracks' | 'Reviews' | 'About' | 'Related Albums';

export interface AlbumTrack {
  number: number;
  title: string;
  duration: string;
  likes: number;
  featuredArtists?: string[];
}

export interface AlbumCredit {
  role: string;
  names: string[];
}

export interface AlbumReview {
  user: string;
  avatar: string;
  rating: number;
  text: string;
  likes: number;
  comments: number;
  date: string;
}

export interface AlbumFeaturedArtist {
  name: string;
  role: string;
  image: string;
}

export interface AlbumExternalLink {
  label: string;
  url: string;
}

export interface RelatedAlbum {
  title: string;
  artist: string;
  cover: string;
  year: number;
  rating: number;
}

export interface AlbumDetails {
  id: string;
  title: string;
  artist: string;
  cover: string;
  banner: string;
  genre: string;
  releaseYear: number;
  releaseDate: string;
  label: string;
  country: string;
  runtime: string;
  averageRating: number;
  reviewCount: string;
  savedCount: string;
  description: string;
  featuredArtists: AlbumFeaturedArtist[];
  listenPlatforms: AlbumExternalLink[];
  shopLinks: AlbumExternalLink[];
  tracks: AlbumTrack[];
  credits: AlbumCredit[];
  reviews: AlbumReview[];
  relatedAlbums: RelatedAlbum[];
  stats: { label: string; value: string }[];
}
