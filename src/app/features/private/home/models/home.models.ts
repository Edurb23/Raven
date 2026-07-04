export interface HomeStat {
  label: string;
  value: string;
  detail: string;
}

export interface HomeAlbum {
  title: string;
  artist: string;
  cover: string;
  meta?: string;
}

export interface HomeReview {
  album: string;
  artist: string;
  cover: string;
  rating: string;
  text: string;
  reviewer: string;
  reviewerAvatar: string;
  likes: number;
  comments: number;
}

export interface HomeArtist {
  name: string;
  genre: string;
  image: string;
  followers: string;
}

export interface HomeActivity {
  user: string;
  action: string;
  target: string;
  time: string;
}

export interface HomeNavigationItem {
  label: string;
  iconPath: string;
  route: string;
  active?: boolean;
}

export interface HomeData {
  stats: HomeStat[];
  continueCollecting: HomeAlbum[];
  trendingReviews: HomeReview[];
  popularAlbums: HomeAlbum[];
  artists: HomeArtist[];
  activity: HomeActivity[];
  recommendations: HomeAlbum[];
}
