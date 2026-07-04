import { ProfileData } from '../models/profile.models';

const collectionPath = '/raven/collection-covers/';

const covers = {
  ariana: `${collectionPath}Positions_de_Ariana_Grande.png`,
  billie: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
  gnx: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
  brat: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`,
  blonde: `${collectionPath}Blonde_-_Frank_Ocean.jpeg`,
  bowie: `${collectionPath}DavisBowieAladdinSane.jpg`,
  clairo: `${collectionPath}clairo.jpg`,
  chappell: `${collectionPath}chappell.jpg`,
  sabrina: `${collectionPath}sabrina-carpenter.jpg`,
  taylor: `${collectionPath}1989_(Taylor's_Version).png`,
  utopia: `${collectionPath}Travis_Scott_-_Utopia.png`
};

export const PROFILE_TABS = ['Overview', 'Reviews', 'Collections', 'Favorites', 'Activity', 'Statistics'] as const;

export const PROFILE_DATA: ProfileData = {
  user: {
    name: 'Eduardo Raven',
    username: '@eduardo',
    avatar: covers.gnx,
    bio: 'Album collector, late-night reviewer and chronic maker of mood-based shelves.',
    memberSince: 'Member since 2026',
    country: 'Brazil',
    quote: 'The soundtrack of my life.'
  },
  stats: [
    { label: 'Albums', value: '148' },
    { label: 'Artists', value: '62' },
    { label: 'Collections', value: '14' },
    { label: 'Reviews', value: '39' },
    { label: 'Followers', value: '1.8K' },
    { label: 'Following', value: '214' }
  ],
  favoriteArtists: [
    { name: 'Kendrick Lamar', genre: 'Hip-Hop', image: covers.gnx },
    { name: 'Frank Ocean', genre: 'R&B', image: covers.blonde },
    { name: 'beabadoobee', genre: 'Indie', image: '/covers/beabadoobee.jpg' },
    { name: 'Ariana Grande', genre: 'Pop', image: covers.ariana }
  ],
  favoriteAlbums: [
    { title: 'Blonde', artist: 'Frank Ocean', cover: covers.blonde, rating: 4.9 },
    { title: 'GNX', artist: 'Kendrick Lamar', cover: covers.gnx, rating: 4.8 },
    { title: 'Hit Me Hard and Soft', artist: 'Billie Eilish', cover: covers.billie, rating: 4.7 },
    { title: 'Aladdin Sane', artist: 'David Bowie', cover: covers.bowie, rating: 4.6 }
  ],
  dna: [
    { icon: '◆', label: 'Favorite Genre', value: 'Hip-Hop' },
    { icon: '◷', label: 'Favorite Decade', value: '2010s' },
    { icon: '★', label: 'Most Collected Artist', value: 'Kendrick Lamar' },
    { icon: '▦', label: 'Most Collected Genre', value: 'R&B' },
    { icon: '⭑', label: 'Average Rating Given', value: '4.3' },
    { icon: '◉', label: 'Favorite Album Format', value: 'Vinyl' },
    { icon: '✎', label: 'Most Reviewed Genre', value: 'Rock' },
    { icon: '↗', label: 'Most Active Month', value: 'June' }
  ],
  genreDistribution: [
    { genre: 'Rock', value: 86 },
    { genre: 'Hip-Hop', value: 68 },
    { genre: 'Jazz', value: 32 },
    { genre: 'Metal', value: 44 },
    { genre: 'Electronic', value: 28 },
    { genre: 'R&B', value: 54 }
  ],
  recentReviews: [
    { album: 'GNX', artist: 'Kendrick Lamar', cover: covers.gnx, rating: 4.8, text: 'Sharp, tense and impossible to ignore.', date: 'Today', likes: 32, comments: 7 },
    { album: 'Brat', artist: 'Charli XCX', cover: covers.brat, rating: 4.7, text: 'A loud little manifesto for club-era pop.', date: 'Yesterday', likes: 54, comments: 11 },
    { album: 'Blonde', artist: 'Frank Ocean', cover: covers.blonde, rating: 4.9, text: 'Still feels like a private room with the lights off.', date: '3d ago', likes: 88, comments: 19 }
  ],
  collections: [
    { title: 'Rainy Night Rotation', covers: [covers.billie, covers.clairo, covers.blonde, covers.ariana], albumCount: 28, likes: 124, updatedAt: 'Updated 2h ago' },
    { title: 'Albums That Changed Me', covers: [covers.blonde, covers.gnx, covers.bowie, covers.billie], albumCount: 34, likes: 238, updatedAt: 'Updated 4d ago' },
    { title: 'Late Night Vinyl', covers: [covers.clairo, covers.ariana, covers.sabrina, covers.taylor], albumCount: 12, likes: 96, updatedAt: 'Updated 1w ago' }
  ],
  activity: [
    { action: 'Reviewed', target: 'GNX', time: '12m ago' },
    { action: 'Added', target: 'Abbey Road to Favorites', time: '1h ago' },
    { action: 'Created', target: 'Late Night Vinyl', time: 'Yesterday' },
    { action: 'Liked', target: 'a review of AM', time: '2d ago' },
    { action: 'Started following', target: 'Billie Eilish', time: '4d ago' }
  ],
  achievements: [
    { icon: '★', title: 'Top Reviewer', description: 'Published reviews that sparked discussion.' },
    { icon: '100', title: '100 Albums', description: 'Collected over one hundred records.' },
    { icon: '▦', title: 'Collection Creator', description: 'Built public album shelves.' },
    { icon: '◉', title: 'Vinyl Collector', description: 'Marked vinyl as a favorite format.' },
    { icon: '♡', title: 'Community Favorite', description: 'Earned love from Raven collectors.' },
    { icon: 'R', title: 'Rock Expert', description: 'Deep catalog activity in rock.' },
    { icon: 'H', title: 'Hip-Hop Fan', description: 'Frequently saves and reviews hip-hop.' }
  ],
  charts: [
    { title: 'Albums by genre', labels: ['Rock', 'Hip-Hop', 'R&B', 'Pop'], points: [86, 68, 54, 48] },
    { title: 'Reviews over time', labels: ['Mar', 'Apr', 'May', 'Jun'], points: [4, 8, 11, 16] },
    { title: 'Collection growth', labels: ['Q1', 'Q2', 'Q3', 'Q4'], points: [28, 54, 91, 148] },
    { title: 'Average rating history', labels: ['Mar', 'Apr', 'May', 'Jun'], points: [4.1, 4.2, 4.3, 4.3] }
  ]
};
