import { AlbumTab } from '../../albums/models/album.models';

export type ArtistTab = Exclude<AlbumTab, 'Classical'>;

export interface CatalogArtist {
  id?: string;
  name: string;
  genres: string[];
  image: string;
  albumCount: number;
  followers: string;
  latestRelease: string;
  topAlbums: string[];
}

export interface ApiArtistImage {
  id: string;
  urlImage: string;
  selected: boolean;
}

export interface ApiArtistListItem {
  idd: string;
  name: string;
  genres: string[];
  bio: string;
  artistImages: ApiArtistImage[];
  created_at: string;
  update_at: string;
}
