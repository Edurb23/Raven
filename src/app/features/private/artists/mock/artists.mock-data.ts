import { ArtistTab, CatalogArtist } from '../models/artist.models';

const collectionPath = '/raven/collection-covers/';

export const ARTIST_TABS: ArtistTab[] = [
  'All',
  'Pop',
  'Rock',
  'Hip-Hop',
  'R&B',
  'Metal',
  'Jazz',
  'Electronic',
  'Indie',
  'K-Pop',
  'Brazilian',
  'A-Z'
];

export const ARTISTS: CatalogArtist[] = [
  {
    name: 'Ariana Grande',
    genre: 'Pop',
    image: `${collectionPath}Positions_de_Ariana_Grande.png`,
    albumCount: 7,
    followers: '312K',
    latestRelease: 'Eternal Sunshine',
    topAlbums: ['Positions', 'Sweetener']
  },
  {
    name: 'Arctic Monkeys',
    genre: 'Rock',
    image: `${collectionPath}Blondie_album_cover.jpg`,
    albumCount: 7,
    followers: '284K',
    latestRelease: 'The Car',
    topAlbums: ['AM', 'Favourite Worst Nightmare']
  },
  {
    name: 'Bad Bunny',
    genre: 'Pop',
    image: '/covers/bad-bunny-dtmf.jpg',
    albumCount: 6,
    followers: '498K',
    latestRelease: 'Debi Tirar Mas Fotos',
    topAlbums: ['Un Verano Sin Ti', 'YHLQMDLG']
  },
  {
    name: 'beabadoobee',
    genre: 'Indie',
    image: '/covers/beabadoobee.jpg',
    albumCount: 3,
    followers: '214K',
    latestRelease: 'This Is How Tomorrow Moves',
    topAlbums: ['Beatopia', 'Fake It Flowers']
  },
  {
    name: 'Billie Eilish',
    genre: 'Pop',
    image: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
    albumCount: 3,
    followers: '442K',
    latestRelease: 'Hit Me Hard and Soft',
    topAlbums: ['Happier Than Ever', 'When We All Fall Asleep']
  },
  {
    name: 'Charli XCX',
    genre: 'Electronic',
    image: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`,
    albumCount: 6,
    followers: '356K',
    latestRelease: 'Brat',
    topAlbums: ['Brat', 'Pop 2']
  },
  {
    name: 'Chappell Roan',
    genre: 'Pop',
    image: `${collectionPath}chappell.jpg`,
    albumCount: 1,
    followers: '173K',
    latestRelease: 'The Rise and Fall of a Midwest Princess',
    topAlbums: ['Midwest Princess']
  },
  {
    name: 'Clairo',
    genre: 'Indie',
    image: `${collectionPath}clairo.jpg`,
    albumCount: 3,
    followers: '165K',
    latestRelease: 'Charm',
    topAlbums: ['Charm', 'Sling']
  },
  {
    name: 'David Bowie',
    genre: 'Rock',
    image: `${collectionPath}DavisBowieAladdinSane.jpg`,
    albumCount: 26,
    followers: '521K',
    latestRelease: 'Blackstar',
    topAlbums: ['Aladdin Sane', 'Low']
  },
  {
    name: 'Frank Ocean',
    genre: 'R&B',
    image: `${collectionPath}Blonde_-_Frank_Ocean.jpeg`,
    albumCount: 2,
    followers: '391K',
    latestRelease: 'Blonde',
    topAlbums: ['Blonde', 'Channel Orange']
  },
  {
    name: 'Gab Ferreira',
    genre: 'Brazilian',
    image: '/covers/gab-ferreira.jpg',
    albumCount: 2,
    followers: '42K',
    latestRelease: 'Visceral',
    topAlbums: ['Visceral', 'Lemon Squeeze']
  },
  {
    name: 'Kendrick Lamar',
    genre: 'Hip-Hop',
    image: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
    albumCount: 6,
    followers: '618K',
    latestRelease: 'GNX',
    topAlbums: ['To Pimp a Butterfly', 'DAMN.']
  },
  {
    name: 'Sabrina Carpenter',
    genre: 'Pop',
    image: `${collectionPath}sabrina-carpenter.jpg`,
    albumCount: 6,
    followers: '227K',
    latestRelease: 'Short n Sweet',
    topAlbums: ['Short n Sweet', 'Emails I Can Not Send']
  },
  {
    name: 'Taylor Swift',
    genre: 'Pop',
    image: `${collectionPath}1989_(Taylor's_Version).png`,
    albumCount: 11,
    followers: '702K',
    latestRelease: 'The Life of a Showgirl',
    topAlbums: ['1989', 'Folklore']
  },
  {
    name: 'underscores',
    genre: 'Electronic',
    image: '/covers/underscores.jpg',
    albumCount: 3,
    followers: '86K',
    latestRelease: 'Wallsocket',
    topAlbums: ['Wallsocket', 'Fishmonger']
  }
];
