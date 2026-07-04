import { ActivityEntity, ActivityFilter, ActivityWidgets } from '../models/activity.models';

const collectionPath = '/raven/collection-covers/';

export const ACTIVITY_FILTERS: ActivityFilter[] = [
  'All',
  'Following',
  'Reviews',
  'Likes',
  'Collections',
  'Artists',
  'Albums',
  'News'
];

export const ACTIVITY_FEED: ActivityEntity[] = [
  {
    id: 'act-001',
    type: 'review',
    user: {
      name: 'Eduardo',
      username: '@eduardo',
      avatar: `${collectionPath}Kendrick_Lamar_-_GNX.png`
    },
    target: {
      title: 'GNX',
      subtitle: 'Kendrick Lamar',
      image: `${collectionPath}Kendrick_Lamar_-_GNX.png`
    },
    createdAt: '12m ago',
    image: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
    description: 'reviewed',
    metadata: {
      filter: 'Reviews',
      rating: 4.8,
      quote: "One of Kendrick's strongest compact statements. Sharp, tense and impossible to ignore.",
      likes: 32,
      comments: 7
    }
  },
  {
    id: 'act-002',
    type: 'like',
    user: {
      name: 'Lucas',
      username: '@lucaswax',
      avatar: `${collectionPath}Travis_Scott_-_Utopia.png`
    },
    target: {
      title: 'AM',
      subtitle: 'your review',
      image: `${collectionPath}Blondie_album_cover.jpg`
    },
    createdAt: '28m ago',
    description: 'liked your review of',
    metadata: {
      filter: 'Likes',
      likes: 1,
      comments: 0
    }
  },
  {
    id: 'act-003',
    type: 'collection',
    user: {
      name: 'Maria',
      username: '@mariarecords',
      avatar: `${collectionPath}clairo.jpg`
    },
    target: {
      title: 'Late Night Vinyl',
      subtitle: '12 albums',
      image: `${collectionPath}Hit_Me_Hard_and_Soft.png`
    },
    createdAt: '44m ago',
    description: 'created',
    metadata: {
      filter: 'Collections',
      count: '12 albums',
      likes: 86,
      comments: 12
    }
  },
  {
    id: 'act-004',
    type: 'album_added',
    user: {
      name: 'Pedro',
      username: '@pedrocrate',
      avatar: `${collectionPath}Blonde_-_Frank_Ocean.jpeg`
    },
    target: {
      title: 'Abbey Road',
      subtitle: 'to Favorites',
      image: `${collectionPath}1989_(Taylor's_Version).png`
    },
    createdAt: '1h ago',
    description: 'added',
    metadata: {
      filter: 'Albums',
      context: 'to Favorites',
      likes: 18,
      comments: 3
    }
  },
  {
    id: 'act-005',
    type: 'follow',
    user: {
      name: 'Ana',
      username: '@anaspins',
      avatar: `${collectionPath}chappell.jpg`
    },
    target: {
      title: 'you'
    },
    createdAt: '2h ago',
    description: 'started following you.',
    metadata: {
      filter: 'Following'
    }
  },
  {
    id: 'act-006',
    type: 'artist_news',
    user: {
      name: 'Raven News',
      username: '@raven',
      avatar: `${collectionPath}Blondie_album_cover.jpg`
    },
    target: {
      title: 'Arctic Monkeys',
      subtitle: 'announced a new album.',
      image: `${collectionPath}Blondie_album_cover.jpg`
    },
    createdAt: '3h ago',
    description: 'artist news',
    metadata: {
      filter: 'News',
      likes: 240,
      comments: 41
    }
  },
  {
    id: 'act-007',
    type: 'new_release',
    user: {
      name: 'Raven Releases',
      username: '@releases',
      avatar: `${collectionPath}Hit_Me_Hard_and_Soft.png`
    },
    target: {
      title: 'Hit Me Hard and Soft',
      subtitle: 'Billie Eilish',
      image: `${collectionPath}Hit_Me_Hard_and_Soft.png`
    },
    createdAt: '5h ago',
    description: 'new album released',
    image: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
    metadata: {
      filter: 'Albums',
      likes: 512,
      comments: 63
    }
  },
  {
    id: 'act-008',
    type: 'trending_review',
    user: {
      name: 'Community Highlight',
      username: '@community',
      avatar: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`
    },
    target: {
      title: 'Brat',
      subtitle: 'Review reached 500 likes',
      image: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`
    },
    createdAt: 'Yesterday',
    description: 'review reached',
    metadata: {
      filter: 'Reviews',
      count: '500 likes',
      likes: 500,
      comments: 92
    }
  }
];

export const ACTIVITY_WIDGETS: ActivityWidgets = {
  recentFollowers: [
    { title: 'Ana', subtitle: '@anaspins', image: `${collectionPath}chappell.jpg` },
    { title: 'Lucas', subtitle: '@lucaswax', image: `${collectionPath}Travis_Scott_-_Utopia.png` },
    { title: 'Maria', subtitle: '@mariarecords', image: `${collectionPath}clairo.jpg` }
  ],
  trendingAlbums: [
    { title: 'GNX', subtitle: 'Kendrick Lamar', image: `${collectionPath}Kendrick_Lamar_-_GNX.png` },
    { title: 'Brat', subtitle: 'Charli XCX', image: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png` },
    { title: 'Blonde', subtitle: 'Frank Ocean', image: `${collectionPath}Blonde_-_Frank_Ocean.jpeg` }
  ],
  popularReviews: [
    { title: 'Hit Me Hard and Soft', subtitle: '312 likes', image: `${collectionPath}Hit_Me_Hard_and_Soft.png` },
    { title: 'AM', subtitle: '221 likes', image: `${collectionPath}Blondie_album_cover.jpg` },
    { title: 'Positions', subtitle: '184 likes', image: `${collectionPath}Positions_de_Ariana_Grande.png` }
  ],
  upcomingReleases: [
    { title: 'Arctic Monkeys', subtitle: 'New album soon', image: `${collectionPath}Blondie_album_cover.jpg` },
    { title: 'Zara Larsson', subtitle: 'Midnight Sun deluxe', image: `${collectionPath}Zara_Larsson_-_Midnight_Sun.png` }
  ]
};
