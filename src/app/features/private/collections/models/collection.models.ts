export type CollectionCategory = 'owned' | 'liked' | 'trending';
export type CollectionVisibility = 'Public' | 'Private';
export type CollectionFilter =
  | 'All'
  | 'Your Collections'
  | 'Liked'
  | 'Trending'
  | 'Rock'
  | 'Hip-Hop'
  | 'Pop'
  | 'R&B'
  | 'Indie'
  | 'Metal'
  | 'A-Z';

export interface CollectionCreator {
  name: string;
  avatar: string;
}

export interface MusicCollection {
  id: string;
  title: string;
  category: CollectionCategory;
  description: string;
  covers: string[];
  albumCount: number;
  tags: string[];
  visibility?: CollectionVisibility;
  lastUpdated?: string;
  creator?: CollectionCreator;
  likes?: number;
  comments?: number;
  trending?: boolean;
}
