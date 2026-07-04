export type ActivityType =
  | 'review'
  | 'like'
  | 'collection'
  | 'album_added'
  | 'follow'
  | 'artist_news'
  | 'new_release'
  | 'trending_review';

export type ActivityFilter =
  | 'All'
  | 'Following'
  | 'Reviews'
  | 'Likes'
  | 'Collections'
  | 'Artists'
  | 'Albums'
  | 'News';

export interface ActivityUser {
  name: string;
  username: string;
  avatar: string;
}

export interface ActivityTarget {
  title: string;
  subtitle?: string;
  image?: string;
}

export interface ActivityEntity {
  id: string;
  type: ActivityType;
  user: ActivityUser;
  target: ActivityTarget;
  createdAt: string;
  image?: string;
  description: string;
  metadata: {
    filter: ActivityFilter;
    rating?: number;
    quote?: string;
    likes?: number;
    comments?: number;
    count?: string;
    context?: string;
  };
}

export interface ActivityWidgetItem {
  title: string;
  subtitle: string;
  image?: string;
}

export interface ActivityWidgets {
  recentFollowers: ActivityWidgetItem[];
  trendingAlbums: ActivityWidgetItem[];
  popularReviews: ActivityWidgetItem[];
  upcomingReleases: ActivityWidgetItem[];
}
