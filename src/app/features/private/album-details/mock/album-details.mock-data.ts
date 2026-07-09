import { AlbumDetails, AlbumDetailTab } from '../models/album-details.models';

const collectionPath = '/raven/collection-covers/';

const covers = {
  gnx: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
  blonde: `${collectionPath}Blonde_-_Frank_Ocean.jpeg`,
  brat: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`,
  billie: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
  utopia: `${collectionPath}Travis_Scott_-_Utopia.png`,
  positions: `${collectionPath}Positions_de_Ariana_Grande.png`,
  clairo: `${collectionPath}clairo.jpg`
};

export const ALBUM_DETAIL_TABS: AlbumDetailTab[] = ['Overview', 'Tracks', 'Reviews', 'About', 'Related Albums'];

export const ALBUM_DETAILS: AlbumDetails = {
  id: 'gnx',
  title: 'GNX',
  artist: 'Kendrick Lamar',
  cover: covers.gnx,
  banner: covers.gnx,
  genre: 'Hip-Hop',
  releaseYear: 2024,
  releaseDate: 'November 22, 2024',
  label: 'pgLang / Interscope',
  country: 'United States',
  runtime: '44 min',
  averageRating: 4.8,
  reviewCount: '12.4K',
  savedCount: '412K',
  description:
    'A compact and sharp Kendrick Lamar record built around direct writing, tense production and high replay value. On Raven, collectors track it as one of the defining rap releases of its moment.',
  featuredArtists: ['SZA', 'Dody6', 'Lefty Gunplay', 'Wallie the Sensei', 'Roddy Ricch'],
  tracks: [
    { number: 1, title: 'wacced out murals', duration: '5:17', likes: 14200 },
    { number: 2, title: 'squabble up', duration: '2:37', likes: 22100 },
    { number: 3, title: 'luther', duration: '2:57', likes: 24800, featuredArtists: ['SZA'] },
    { number: 4, title: 'man at the garden', duration: '3:53', likes: 11900 },
    { number: 5, title: 'hey now', duration: '3:37', likes: 13100, featuredArtists: ['Dody6'] },
    { number: 6, title: 'reincarnated', duration: '4:35', likes: 19500 },
    { number: 7, title: 'tv off', duration: '3:40', likes: 28900 },
    { number: 8, title: 'dodger blue', duration: '2:11', likes: 10700 },
    { number: 9, title: 'peekaboo', duration: '2:35', likes: 9800 },
    { number: 10, title: 'heart pt. 6', duration: '4:52', likes: 21400 },
    { number: 11, title: 'gnx', duration: '3:13', likes: 8900 },
    { number: 12, title: 'gloria', duration: '4:47', likes: 18200, featuredArtists: ['SZA'] }
  ],
  credits: [
    { role: 'Primary artist', names: ['Kendrick Lamar'] },
    { role: 'Featured artists', names: ['SZA', 'Dody6', 'Lefty Gunplay', 'Wallie the Sensei', 'Roddy Ricch'] },
    { role: 'Label', names: ['pgLang', 'Interscope'] },
    { role: 'Format', names: ['Digital', 'Vinyl future'] }
  ],
  stats: [
    { label: 'Saved by collectors', value: '412K' },
    { label: 'Reviews', value: '12.4K' },
    { label: 'Average rating', value: '4.8' },
    { label: 'Tracks liked', value: '211K' }
  ],
  reviews: [
    {
      user: 'Eduardo',
      avatar: covers.gnx,
      rating: 5,
      text: 'Compact, direct and built for repeat listens. It feels like every track has a reason to be here.',
      likes: 324,
      comments: 17,
      date: 'Today'
    },
    {
      user: 'Maria',
      avatar: covers.clairo,
      rating: 4.8,
      text: 'The production is tense without feeling overloaded, and the sequencing makes it easy to revisit.',
      likes: 210,
      comments: 12,
      date: 'Yesterday'
    },
    {
      user: 'Lucas',
      avatar: covers.utopia,
      rating: 4.6,
      text: 'A record that feels smaller on purpose, but the community conversation around it is massive.',
      likes: 156,
      comments: 9,
      date: '2d ago'
    }
  ],
  relatedAlbums: [
    { title: 'Blonde', artist: 'Frank Ocean', cover: covers.blonde, year: 2016, rating: 4.9 },
    { title: 'Brat', artist: 'Charli XCX', cover: covers.brat, year: 2024, rating: 4.7 },
    { title: 'Hit Me Hard and Soft', artist: 'Billie Eilish', cover: covers.billie, year: 2024, rating: 4.8 },
    { title: 'Utopia', artist: 'Travis Scott', cover: covers.utopia, year: 2023, rating: 4.2 },
    { title: 'Positions', artist: 'Ariana Grande', cover: covers.positions, year: 2020, rating: 4.3 }
  ]
};
