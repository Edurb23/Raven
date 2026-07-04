import { HomeData, HomeNavigationItem } from '../models/home.models';

const collectionPath = '/raven/collection-covers/';

export const HOME_NAVIGATION: HomeNavigationItem[] = [
  { label: 'Home', route: '/app', iconPath: 'M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5Z', active: true },
  { label: 'Activity', route: '/app/activity', iconPath: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.6-12.6-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z' },
  { label: 'Albums', route: '/app/albums', iconPath: 'M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' },
  { label: 'Artists', route: '/app/artists', iconPath: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0H4Z' },
  { label: 'Collections', route: '/app/collections', iconPath: 'M4 5a2 2 0 0 1 2-2h10v14H6a2 2 0 0 0-2 2V5Zm2 14h12a2 2 0 0 0 2-2V7h-2v12H6Z' },
  { label: 'Profile', route: '/app/profile', iconPath: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0H5Z' },
  { label: 'Settings', route: '/app/settings', iconPath: 'M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Zm0-13 1.3 2.2 2.5.4.4 2.5 2.2 1.3-1 2.4 1 2.4-2.2 1.3-.4 2.5-2.5.4L12 20l-1.3-2.2-2.5-.4-.4-2.5-2.2-1.3 1-2.4-1-2.4 2.2-1.3.4-2.5 2.5-.4L12 2.5Z' }
];

export const HOME_DATA: HomeData = {
  stats: [
    { label: 'Albums', value: '148', detail: 'saved records' },
    { label: 'Artists', value: '62', detail: 'tracked voices' },
    { label: 'Collections', value: '14', detail: 'curated lists' },
    { label: 'Reviews', value: '39', detail: 'published notes' }
  ],
  continueCollecting: [
    {
      title: 'Positions',
      artist: 'Ariana Grande',
      cover: `${collectionPath}Positions_de_Ariana_Grande.png`,
      meta: 'Pop main character era'
    },
    {
      title: 'Hit Me Hard and Soft',
      artist: 'Billie Eilish',
      cover: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
      meta: 'Muted late night pop'
    },
    {
      title: 'GNX',
      artist: 'Kendrick Lamar',
      cover: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
      meta: 'West coast rotation'
    },
    {
      title: 'Brat',
      artist: 'Charli XCX',
      cover: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`,
      meta: 'Club notebook'
    },
    {
      title: 'Debi Tirar Mas Fotos',
      artist: 'Bad Bunny',
      cover: '/covers/bad-bunny-dtmf.jpg',
      meta: 'Latin archive'
    }
  ],
  trendingReviews: [
    {
      album: 'GNX',
      artist: 'Kendrick Lamar',
      cover: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
      rating: '4.8',
      text: 'A compact record with sharp edges, heavy replay value and a community debate that still feels alive.',
      reviewer: 'Lucas',
      reviewerAvatar: `${collectionPath}Travis_Scott_-_Utopia.png`,
      likes: 428,
      comments: 31
    },
    {
      album: 'Hit Me Hard and Soft',
      artist: 'Billie Eilish',
      cover: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
      rating: '4.7',
      text: 'The kind of album that rewards quiet listening. Every save feels more intentional than the last.',
      reviewer: 'Maria',
      reviewerAvatar: `${collectionPath}clairo.jpg`,
      likes: 312,
      comments: 24
    }
  ],
  popularAlbums: [
    { title: 'Thriller', artist: 'Michael Jackson', cover: '/covers/thriller.jpg' },
    { title: 'You Seem Pretty Sad for a Girl So in Love', artist: 'Olivia Rodrigo', cover: '/covers/olivia-pretty-sad.jpg' },
    { title: 'Debi Tirar Mas Fotos', artist: 'Bad Bunny', cover: '/covers/bad-bunny-dtmf.jpg' },
    { title: 'The Life of a Showgirl', artist: 'Taylor Swift', cover: '/covers/showgirl.jpg' },
    { title: 'Blonde', artist: 'Frank Ocean', cover: `${collectionPath}Blonde_-_Frank_Ocean.jpeg` },
    { title: 'AM', artist: 'Arctic Monkeys', cover: `${collectionPath}Blondie_album_cover.jpg` }
  ],
  artists: [
    { name: 'underscores', genre: 'Hyperpop / indie', image: '/covers/underscores.jpg', followers: '86K' },
    { name: 'beabadoobee', genre: 'Indie rock', image: '/covers/beabadoobee.jpg', followers: '214K' },
    { name: 'Gab Ferreira', genre: 'Alt pop', image: '/covers/gab-ferreira.jpg', followers: '42K' }
  ],
  activity: [
    { user: 'Lucas', action: 'reviewed', target: 'GNX', time: '8m ago' },
    { user: 'Maria', action: 'created', target: 'Late Night Vinyl', time: '21m ago' },
    { user: 'Pedro', action: 'favorited', target: 'AM', time: '44m ago' },
    { user: 'Ana', action: 'added', target: 'Blonde', time: '1h ago' }
  ],
  recommendations: [
    { title: 'Midnight Sun', artist: 'Zara Larsson', cover: `${collectionPath}Zara_Larsson_-_Midnight_Sun.png`, meta: 'Because you save bright pop records' },
    { title: 'Trittclub', artist: 'Trittclub', cover: `${collectionPath}Trittclub.jpg`, meta: 'Because your collections lean alternative' },
    { title: 'Aladdin Sane', artist: 'David Bowie', cover: `${collectionPath}DavisBowieAladdinSane.jpg`, meta: 'A classic for your glam rock shelf' }
  ]
};
