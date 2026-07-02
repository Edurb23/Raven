import {
  AlbumPreview,
  ArtistPreview,
  CommunityReview,
  CommunityStats,
  LandingNavItem,
  UserCollection
} from '../models/landing.models';

export const LANDING_NAV_ITEMS: readonly LandingNavItem[] = [
  { label: 'Reviews', fragment: 'reviews' },
  { label: 'Community', fragment: 'collections' }
];

export const TRENDING_ALBUMS: readonly AlbumPreview[] = [
  {
    title: 'Thriller',
    artist: 'Michael Jackson',
    mood: 'Pop',
    visualClass: 'visual--thriller',
    alt: 'Album cover for Thriller by Michael Jackson'
  },
  {
    title: 'You Seem Pretty Sad for a Girl So in Love',
    artist: 'Olivia Rodrigo',
    mood: 'Pop rock',
    visualClass: 'visual--olivia-pretty-sad',
    alt: 'Album cover for You Seem Pretty Sad for a Girl So in Love by Olivia Rodrigo'
  },
  {
    title: 'Debi Tirar Mas Fotos',
    artist: 'Bad Bunny',
    mood: 'Latin',
    visualClass: 'visual--bad-bunny-dtmf',
    alt: 'Album cover for Debi Tirar Mas Fotos by Bad Bunny'
  },
  {
    title: 'The Life of a Showgirl',
    artist: 'Taylor Swift',
    mood: 'Pop',
    visualClass: 'visual--showgirl',
    alt: 'Album cover for The Life of a Showgirl by Taylor Swift'
  }
];

export const FEATURED_ARTISTS: readonly ArtistPreview[] = [
  {
    name: 'underscores',
    genre: 'Hyperpop',
    listeners: '48K collectors',
    visualClass: 'visual--underscores'
  },
  {
    name: 'beabadoobee',
    genre: 'Indie rock',
    listeners: '33K collectors',
    visualClass: 'visual--beabadoobee'
  },
  {
    name: 'Gab Ferreira',
    genre: 'Indie pop',
    listeners: '61K collectors',
    visualClass: 'visual--gab-ferreira'
  }
];

export const COMMUNITY_REVIEWS: readonly CommunityReview[] = [
  {
    albumTitle: 'GNX',
    artistName: 'Kendrick Lamar',
    coverImagePath: '/raven/collection-covers/Kendrick_Lamar_-_GNX.png',
    rating: '4.8',
    reviewerName: 'marina.wav',
    reviewerInitials: 'MW',
    reviewerAvatarClass: 'avatar--violet',
    publishedAt: '2h ago',
    text: 'Sharp sequencing, huge replay value and the kind of production details that make every listen feel active.',
    likeCount: '324',
    commentCount: '18',
    tags: ['HipHop', 'WestCoast', 'Rap'],
    verified: true
  },
  {
    albumTitle: 'Hit Me Hard and Soft',
    artistName: 'Billie Eilish',
    coverImagePath: '/raven/collection-covers/Hit_Me_Hard_and_Soft.png',
    rating: '4.7',
    reviewerName: 'theo.collects',
    reviewerInitials: 'TC',
    reviewerAvatarClass: 'avatar--blue',
    publishedAt: 'Yesterday',
    text: 'Quiet, cinematic and strangely physical. The best moments feel like they are happening in the room.',
    likeCount: '218',
    commentCount: '26',
    tags: ['Alternative', 'Pop', 'Moody'],
    verified: false
  },
  {
    albumTitle: 'Brat',
    artistName: 'Charli xcx',
    coverImagePath: '/raven/collection-covers/Charli_XCX_-_Brat_(album_cover).png',
    rating: '4.9',
    reviewerName: 'iris.fm',
    reviewerInitials: 'IF',
    reviewerAvatarClass: 'avatar--green',
    publishedAt: '3d ago',
    text: 'Messy in the exact right way. It turns club energy, insecurity and internet chaos into a real era.',
    likeCount: '512',
    commentCount: '41',
    tags: ['Pop', 'Club', 'Electronic'],
    verified: true
  }
];

export const COMMUNITY_STATS: CommunityStats = {
  stats: [
    { label: 'reviews', value: '12.4K' },
    { label: 'new today', value: '580' },
    { label: 'average rating', value: '4.8' },
    { label: 'active collectors', value: '1.3K' }
  ],
  trendingReviews: ['GNX', 'Hit Me Hard and Soft', 'AM', 'Brat']
};

export const USER_COLLECTIONS: readonly UserCollection[] = [
  {
    title: 'Pop main character era',
    curator: 'Curated by Raven',
    count: '34 albums',
    description: 'Glossy pop records, big hooks and diary-like albums built for repeat listening.',
    coverImagePaths: [
      '/raven/collection-covers/Positions_de_Ariana_Grande.png',
      "/raven/collection-covers/1989_(Taylor's_Version).png",
      '/raven/collection-covers/sabrina-carpenter.jpg',
      '/raven/collection-covers/chappell.jpg'
    ],
    extraAlbumCount: '+30'
  },
  {
    title: 'Indie and art-pop essentials',
    curator: 'Curated by Luna',
    count: '26 albums',
    description: 'Intimate songwriting, iconic visuals and records that reward close listening.',
    coverImagePaths: [
      '/raven/collection-covers/Blonde_-_Frank_Ocean.jpeg',
      '/raven/collection-covers/clairo.jpg',
      '/raven/collection-covers/Blondie_album_cover.jpg',
      '/raven/collection-covers/DavisBowieAladdinSane.jpg'
    ],
    extraAlbumCount: '+22'
  },
  {
    title: 'Late-night voltage',
    curator: 'Curated by Nico',
    count: '31 albums',
    description: 'High-energy albums for neon drives, heavy bass and midnight discovery sessions.',
    coverImagePaths: [
      '/raven/collection-covers/Travis_Scott_-_Utopia.png',
      '/raven/collection-covers/Lil_Uzi_Vert_vs_the_World_2_cover_art.jpg',
      '/raven/collection-covers/Trittclub.jpg',
      '/raven/collection-covers/Zara_Larsson_-_Midnight_Sun.png'
    ],
    extraAlbumCount: '+27'
  }
];
