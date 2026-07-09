import { ArtistDetails, ArtistDetailTab } from '../models/artist-details.models';

const collectionPath = '/raven/collection-covers/';

const covers = {
  gnx: `${collectionPath}Kendrick_Lamar_-_GNX.png`,
  blonde: `${collectionPath}Blonde_-_Frank_Ocean.jpeg`,
  utopia: `${collectionPath}Travis_Scott_-_Utopia.png`,
  brat: `${collectionPath}Charli_XCX_-_Brat_(album_cover).png`,
  billie: `${collectionPath}Hit_Me_Hard_and_Soft.png`,
  ariana: `${collectionPath}Positions_de_Ariana_Grande.png`,
  clairo: `${collectionPath}clairo.jpg`,
  bowie: `${collectionPath}DavisBowieAladdinSane.jpg`
};

export const ARTIST_DETAIL_TABS: ArtistDetailTab[] = ['Overview', 'Albums', 'Community', 'News', 'Reviews', 'About'];

export const ARTIST_DETAILS: ArtistDetails = {
  id: 'kendrick-lamar',
  name: 'Kendrick Lamar',
  banner: covers.gnx,
  photo: covers.gnx,
  genres: ['Hip-Hop', 'Rap', 'West Coast'],
  country: 'United States',
  yearsActive: '2003 - present',
  followers: '618K',
  albumCount: 6,
  averageRating: 4.8,
  communityRating: 4.9,
  biography:
    'Kendrick Lamar is a generational rapper and album artist known for dense storytelling, conceptual records and community-shaping releases.',
  origin: 'Compton, California',
  members: ['Kendrick Lamar'],
  labels: ['Top Dawg Entertainment', 'Aftermath', 'Interscope', 'pgLang'],
  officialWebsite: 'kendricklamar.com',
  latestRelease: { title: 'GNX', year: 2024, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.8, reviewCount: 12400 },
  featuredAlbum: { title: 'To Pimp a Butterfly', year: 2015, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.9, reviewCount: 28400 },
  albums: [
    { title: 'GNX', year: 2024, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.8, reviewCount: 12400 },
    { title: 'Mr. Morale & The Big Steppers', year: 2022, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.5, reviewCount: 18300 },
    { title: 'DAMN.', year: 2017, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.6, reviewCount: 24100 },
    { title: 'untitled unmastered.', year: 2016, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.2, reviewCount: 9300 },
    { title: 'To Pimp a Butterfly', year: 2015, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.9, reviewCount: 28400 },
    { title: 'good kid, m.A.A.d city', year: 2012, genre: 'Hip-Hop', cover: covers.gnx, averageRating: 4.8, reviewCount: 27600 }
  ],
  topSongs: ['tv off', 'luther', 'squabble up', 'DNA.', 'Alright'],
  statistics: [
    { label: 'Albums saved', value: '412K' },
    { label: 'Reviews', value: '92K' },
    { label: 'Collections', value: '18K' },
    { label: 'Average rating', value: '4.8' }
  ],
  relatedArtists: [
    { name: 'Frank Ocean', genre: 'R&B', image: covers.blonde },
    { name: 'Travis Scott', genre: 'Hip-Hop', image: covers.utopia },
    { name: 'Tyler, The Creator', genre: 'Hip-Hop', image: covers.brat },
    { name: 'J. Cole', genre: 'Hip-Hop', image: covers.bowie }
  ],
  reviews: [
    { user: 'Eduardo', avatar: covers.gnx, rating: 5, text: 'GNX feels compact, precise and loaded with repeat value.', likes: 324, comments: 17, date: 'Today', album: 'GNX' },
    { user: 'Maria', avatar: covers.clairo, rating: 4.8, text: "The tension, pacing and delivery make this one of the year's essential listens.", likes: 210, comments: 12, date: 'Yesterday', album: 'GNX' },
    { user: 'Lucas', avatar: covers.utopia, rating: 4.6, text: 'Every small detail sounds like it belongs to a larger argument.', likes: 156, comments: 9, date: '2d ago', album: 'DAMN.' }
  ],
  news: [
    { title: 'New album announced', description: 'A new era is being teased by pgLang with visual fragments and short clips.', date: '2026-07-01', type: 'Album' },
    { title: 'World tour announced', description: 'New arena dates are expected to begin later this year.', date: '2026-06-14', type: 'Tour' },
    { title: 'Grammy nomination', description: 'GNX received nominations across rap and album categories.', date: '2026-05-29', type: 'Awards' },
    { title: 'New single released', description: 'A surprise single appeared with minimal rollout and heavy discussion.', date: '2026-05-08', type: 'Single' },
    { title: 'Interview published', description: 'A rare long-form interview explored writing, discipline and collaboration.', date: '2026-04-18', type: 'Interview' }
  ],
  community: {
    latestReviews: [
      { user: 'Eduardo', avatar: covers.gnx, rating: 5, text: "One of Kendrick's strongest modern statements.", likes: 324, comments: 17, date: 'Today', album: 'GNX' },
      { user: 'Ana', avatar: covers.ariana, rating: 4.7, text: 'Dense, urgent and strangely replayable.', likes: 98, comments: 6, date: '1h ago', album: 'GNX' }
    ],
    collections: [
      { title: 'Late Night Vinyl', description: 'Includes AM, Blonde, Positions and GNX.', meta: '34 albums', image: covers.blonde },
      { title: 'Albums That Changed Me', description: 'A personal shelf of records that rewire taste.', meta: '48 albums', image: covers.gnx }
    ],
    posts: [
      { title: 'Best Kendrick closer?', description: 'Collectors are debating the strongest final track across the catalog.', meta: '128 replies' },
      { title: 'GNX first-week reactions', description: 'A focused thread on production, sequencing and replay value.', meta: '82 replies' }
    ],
    followers: [
      { name: 'Nina', genre: 'Collector', image: covers.clairo },
      { name: 'Pedro', genre: 'Reviewer', image: covers.utopia },
      { name: 'Ana', genre: 'Curator', image: covers.ariana }
    ],
    mostLikedReview: { user: 'Eduardo', avatar: covers.gnx, rating: 5, text: "One of Kendrick's strongest compact statements.", likes: 500, comments: 42, date: 'This week', album: 'GNX' },
    popularDiscussion: { title: 'Community Highlight', description: 'Review reached 500 likes this week.', meta: 'Trending now', image: covers.gnx }
  },
  sidebar: {
    upcomingReleases: ['Untitled pgLang project', 'Tour documentary'],
    trendingCollection: 'Albums Everyone Is Talking About',
    peopleAlsoViewed: [
      { name: 'Frank Ocean', genre: 'R&B', image: covers.blonde },
      { name: 'Travis Scott', genre: 'Hip-Hop', image: covers.utopia },
      { name: 'Billie Eilish', genre: 'Pop', image: covers.billie }
    ]
  }
};
