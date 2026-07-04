import { AlbumGenre, AlbumTab } from '../../albums/models/album.models';

export type ArtistGenre = Exclude<AlbumGenre, 'Classical'>;
export type ArtistTab = Exclude<AlbumTab, 'Classical'>;

export interface CatalogArtist {
  name: string;
  genre: ArtistGenre;
  image: string;
  albumCount: number;
  followers: string;
  latestRelease: string;
  topAlbums: string[];
}
