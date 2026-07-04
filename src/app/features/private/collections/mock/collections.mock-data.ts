import { CollectionFilter, MusicCollection } from '../models/collection.models';

const collectionPath = '/raven/collection-covers/';

const covers = {
  ariana: `${collectionPath}Positions_de_Ariana_Grande.png`,
  taylor: `${collectionPath}1989_(Taylor's_Version).png`,
  chappell: `${collectionPath}chappell.jpg`,
  billie: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
  gnx: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
  brat: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`,
  blonde: `${collectionPath}Blonde_-_Frank_Ocean.jpeg`,
  bowie: `${collectionPath}DavisBowieAladdinSane.jpg`,
  clairo: `${collectionPath}clairo.jpg`,
  sabrina: `${collectionPath}sabrina-carpenter.jpg`,
  utopia: `${collectionPath}Travis_Scott_-_Utopia.png`,
  zara: `${collectionPath}Zara_Larsson_-_Midnight_Sun.png`
};

export const COLLECTION_FILTERS: CollectionFilter[] = [
  'All',
  'Your Collections',
  'Liked',
  'Trending',
  'Rock',
  'Hip-Hop',
  'Pop',
  'R&B',
  'Indie',
  'Metal',
  'A-Z'
];

export const COLLECTIONS: MusicCollection[] = [
  {
    id: 'col-001',
    title: 'Rainy Night Rotation',
    category: 'owned',
    description: 'Soft records for blue windows, quiet streets and repeat listening.',
    covers: [covers.billie, covers.clairo, covers.blonde, covers.ariana],
    albumCount: 28,
    tags: ['Pop', 'R&B', 'Indie'],
    visibility: 'Public',
    lastUpdated: 'Updated 2h ago'
  },
  {
    id: 'col-002',
    title: 'First Press Favorites',
    category: 'owned',
    description: 'The records that feel essential on the shelf.',
    covers: [covers.bowie, covers.taylor, covers.gnx, covers.brat],
    albumCount: 16,
    tags: ['Rock', 'Pop'],
    visibility: 'Private',
    lastUpdated: 'Updated yesterday'
  },
  {
    id: 'col-003',
    title: 'Albums That Changed Me',
    category: 'owned',
    description: 'Personal milestones, no skips, no filler.',
    covers: [covers.blonde, covers.gnx, covers.bowie, covers.billie],
    albumCount: 34,
    tags: ['R&B', 'Hip-Hop', 'Rock'],
    visibility: 'Public',
    lastUpdated: 'Updated 4d ago'
  },
  {
    id: 'col-004',
    title: 'Late Night Vinyl',
    category: 'owned',
    description: 'After-midnight albums with warm edges and long shadows.',
    covers: [covers.clairo, covers.ariana, covers.zara, covers.billie],
    albumCount: 12,
    tags: ['Indie', 'Pop'],
    visibility: 'Public',
    lastUpdated: 'Updated 1w ago'
  },
  {
    id: 'col-005',
    title: '90s Alternative Essentials',
    category: 'liked',
    description: 'A clean entry point into noisy guitars, cult classics and big choruses.',
    covers: [covers.bowie, covers.blonde, covers.clairo, covers.taylor],
    albumCount: 42,
    tags: ['Rock', 'Indie'],
    creator: { name: 'Lucas', avatar: covers.utopia },
    likes: 842
  },
  {
    id: 'col-006',
    title: 'Best Debut Albums',
    category: 'liked',
    description: 'First statements that already sounded fully formed.',
    covers: [covers.chappell, covers.sabrina, covers.gnx, covers.brat],
    albumCount: 31,
    tags: ['Pop', 'Hip-Hop', 'Indie'],
    creator: { name: 'Maria', avatar: covers.clairo },
    likes: 621
  },
  {
    id: 'col-007',
    title: 'Sunday Morning Records',
    category: 'liked',
    description: 'Calm, bright and easy to keep spinning.',
    covers: [covers.clairo, covers.sabrina, covers.ariana, covers.zara],
    albumCount: 18,
    tags: ['Pop', 'Indie'],
    creator: { name: 'Ana', avatar: covers.chappell },
    likes: 394
  },
  {
    id: 'col-008',
    title: 'Albums Everyone Is Talking About',
    category: 'trending',
    description: 'The public shelf that keeps changing every week.',
    covers: [covers.gnx, covers.brat, covers.billie, covers.chappell],
    albumCount: 52,
    tags: ['Pop', 'Hip-Hop', 'Electronic'],
    creator: { name: 'Raven Community', avatar: covers.brat },
    likes: 2400,
    comments: 318,
    trending: true
  },
  {
    id: 'col-009',
    title: 'Modern R&B Classics',
    category: 'trending',
    description: 'Recent records already shaping the language of R&B.',
    covers: [covers.blonde, covers.ariana, covers.billie, covers.zara],
    albumCount: 27,
    tags: ['R&B', 'Pop'],
    creator: { name: 'Nina', avatar: covers.blonde },
    likes: 1500,
    comments: 144,
    trending: true
  },
  {
    id: 'col-010',
    title: 'Underground Hip-Hop Gems',
    category: 'trending',
    description: 'Deep cuts, cult favorites and sharp lyricists.',
    covers: [covers.gnx, covers.utopia, covers.blonde, covers.bowie],
    albumCount: 39,
    tags: ['Hip-Hop'],
    creator: { name: 'Pedro', avatar: covers.gnx },
    likes: 981,
    comments: 87,
    trending: true
  },
  {
    id: 'col-011',
    title: 'New Indie Voices',
    category: 'trending',
    description: 'Artists making small rooms feel enormous.',
    covers: [covers.clairo, covers.chappell, covers.sabrina, covers.billie],
    albumCount: 24,
    tags: ['Indie', 'Pop'],
    creator: { name: 'Iris', avatar: covers.clairo },
    likes: 1120,
    comments: 96,
    trending: true
  }
];
