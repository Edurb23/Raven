export type ArtistDetailTab = 'Overview' | 'Albums' | 'Community' | 'News' | 'Reviews' | 'About';

export interface ArtistAlbum {
  title: string;
  year: number;
  genre: string;
  cover: string;
  averageRating: number;
  reviewCount: number;
}

export interface ArtistReview {
  user: string;
  avatar: string;
  rating: number;
  text: string;
  likes: number;
  comments: number;
  date: string;
  album: string;
}

export interface ArtistNewsItem {
  title: string;
  description: string;
  date: string;
  type: string;
}

export interface ArtistCommunityPost {
  title: string;
  description: string;
  meta: string;
  image?: string;
}

export interface RelatedArtist {
  name: string;
  genre: string;
  image: string;
}

export interface ArtistDetails {
  id: string;
  name: string;
  banner: string;
  photo: string;
  genres: string[];
  country: string;
  yearsActive: string;
  followers: string;
  albumCount: number;
  averageRating: number;
  communityRating: number;
  biography: string;
  origin: string;
  members: string[];
  labels: string[];
  officialWebsite: string;
  latestRelease: ArtistAlbum;
  featuredAlbum: ArtistAlbum;
  albums: ArtistAlbum[];
  topSongs: string[];
  statistics: { label: string; value: string }[];
  relatedArtists: RelatedArtist[];
  reviews: ArtistReview[];
  news: ArtistNewsItem[];
  community: {
    latestReviews: ArtistReview[];
    collections: ArtistCommunityPost[];
    posts: ArtistCommunityPost[];
    followers: RelatedArtist[];
    mostLikedReview: ArtistReview;
    popularDiscussion: ArtistCommunityPost;
  };
  sidebar: {
    upcomingReleases: string[];
    trendingCollection: string;
    peopleAlsoViewed: RelatedArtist[];
  };
}
