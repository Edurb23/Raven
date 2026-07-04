import { AlbumTab, CatalogAlbum } from '../models/album.models';

const collectionPath = '/raven/collection-covers/';

export const ALBUM_TABS: AlbumTab[] = [
  'All',
  'Pop',
  'Rock',
  'Hip-Hop',
  'R&B',
  'Metal',
  'Jazz',
  'Electronic',
  'Classical',
  'Indie',
  'K-Pop',
  'Brazilian',
  'A-Z'
];

export const ALBUMS: CatalogAlbum[] = [
  { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', year: 1982, rating: 4.9, cover: '/covers/thriller.jpg' },
  { title: 'You Seem Pretty Sad for a Girl So in Love', artist: 'Olivia Rodrigo', genre: 'Pop', year: 2026, rating: 4.4, cover: '/covers/olivia-pretty-sad.jpg' },
  { title: 'Debi Tirar Mas Fotos', artist: 'Bad Bunny', genre: 'Pop', year: 2025, rating: 4.7, cover: '/covers/bad-bunny-dtmf.jpg' },
  { title: 'The Life of a Showgirl', artist: 'Taylor Swift', genre: 'Pop', year: 2025, rating: 4.2, cover: '/covers/showgirl.jpg' },
  { title: 'Positions', artist: 'Ariana Grande', genre: 'Pop', year: 2020, rating: 4.3, cover: `${collectionPath}Positions_de_Ariana_Grande.png` },
  { title: 'Hit Me Hard and Soft', artist: 'Billie Eilish', genre: 'Pop', year: 2024, rating: 4.8, cover: `${collectionPath}Hit_Me_Hard_and_Soft.png` },
  { title: 'GNX', artist: 'Kendrick Lamar', genre: 'Hip-Hop', year: 2024, rating: 4.8, cover: `${collectionPath}Kendrick_Lamar_-_GNX.png` },
  { title: 'Brat', artist: 'Charli XCX', genre: 'Electronic', year: 2024, rating: 4.7, cover: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png` },
  { title: 'Blonde', artist: 'Frank Ocean', genre: 'R&B', year: 2016, rating: 4.9, cover: `${collectionPath}Blonde_-_Frank_Ocean.jpeg` },
  { title: 'AM', artist: 'Arctic Monkeys', genre: 'Rock', year: 2013, rating: 4.5, cover: `${collectionPath}Blondie_album_cover.jpg` },
  { title: 'Utopia', artist: 'Travis Scott', genre: 'Hip-Hop', year: 2023, rating: 4.2, cover: `${collectionPath}Travis_Scott_-_Utopia.png` },
  { title: 'Aladdin Sane', artist: 'David Bowie', genre: 'Rock', year: 1973, rating: 4.6, cover: `${collectionPath}DavisBowieAladdinSane.jpg` },
  { title: 'Midnight Sun', artist: 'Zara Larsson', genre: 'Pop', year: 2025, rating: 4.1, cover: `${collectionPath}Zara_Larsson_-_Midnight_Sun.png` },
  { title: '1989 Taylor Version', artist: 'Taylor Swift', genre: 'Pop', year: 2023, rating: 4.4, cover: `${collectionPath}1989_(Taylor's_Version).png` },
  { title: 'Trittclub', artist: 'Trittclub', genre: 'Electronic', year: 2024, rating: 4.0, cover: `${collectionPath}Trittclub.jpg` },
  { title: 'Charm', artist: 'Clairo', genre: 'Indie', year: 2024, rating: 4.5, cover: `${collectionPath}clairo.jpg` },
  { title: 'Short n Sweet', artist: 'Sabrina Carpenter', genre: 'Pop', year: 2024, rating: 4.1, cover: `${collectionPath}sabrina-carpenter.jpg` },
  { title: 'The Rise and Fall of a Midwest Princess', artist: 'Chappell Roan', genre: 'Pop', year: 2023, rating: 4.6, cover: `${collectionPath}chappell.jpg` }
];
