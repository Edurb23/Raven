export type AlbumGenre =
  | 'Pop'
  | 'Rock'
  | 'Hip-Hop'
  | 'R&B'
  | 'Metal'
  | 'Jazz'
  | 'Electronic'
  | 'Classical'
  | 'Indie'
  | 'K-Pop'
  | 'Brazilian';

export type AlbumTab = AlbumGenre | 'All' | 'A-Z';

export interface CatalogAlbum {
  title: string;
  artist: string;
  genre: AlbumGenre;
  year: number;
  rating: number;
  cover: string;
}
