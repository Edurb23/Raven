import {
  AlbumPreview,
  ArtistPreview,
  CommunityReview,
  LandingNavItem,
  UserCollection
} from '../models/landing.models';

export const LANDING_NAV_ITEMS: readonly LandingNavItem[] = [
  { label: 'Trending', fragment: 'trending' },
  { label: 'Artists', fragment: 'artists' },
  { label: 'Reviews', fragment: 'reviews' },
  { label: 'Collections', fragment: 'collections' }
];

export const TRENDING_ALBUMS: readonly AlbumPreview[] = [
  {
    title: 'Midnight Atlas',
    artist: 'Nova Vale',
    mood: 'Synth pop',
    visualClass: 'visual--violet-blue',
    alt: 'Abstract purple and blue album artwork for Midnight Atlas'
  },
  {
    title: 'Signal Bloom',
    artist: 'The Glass Choir',
    mood: 'Dreamwave',
    visualClass: 'visual--blue-cyan',
    alt: 'Abstract blue and violet album artwork for Signal Bloom'
  },
  {
    title: 'Velvet Static',
    artist: 'Aria North',
    mood: 'Alt R&B',
    visualClass: 'visual--violet-rose',
    alt: 'Abstract violet and magenta album artwork for Velvet Static'
  },
  {
    title: 'Low Orbit',
    artist: 'Mica Stone',
    mood: 'Indie electronic',
    visualClass: 'visual--orbit',
    alt: 'Abstract dark blue album artwork for Low Orbit'
  }
];

export const FEATURED_ARTISTS: readonly ArtistPreview[] = [
  {
    name: 'Luna Vesper',
    genre: 'Ambient pop',
    listeners: '48K collectors',
    visualClass: 'visual--violet-blue'
  },
  {
    name: 'Orchid Line',
    genre: 'Neo soul',
    listeners: '33K collectors',
    visualClass: 'visual--blue-cyan'
  },
  {
    name: 'North Circuit',
    genre: 'Electronic',
    listeners: '61K collectors',
    visualClass: 'visual--orbit'
  }
];

export const COMMUNITY_REVIEWS: readonly CommunityReview[] = [
  {
    author: 'Marina C.',
    album: 'Signal Bloom',
    rating: '4.8',
    quote: 'A late-night record with enough shimmer to make every track feel newly discovered.'
  },
  {
    author: 'Theo R.',
    album: 'Low Orbit',
    rating: '4.6',
    quote: 'The production is patient, textured and perfect for building a focused collection.'
  },
  {
    author: 'Iris M.',
    album: 'Velvet Static',
    rating: '4.9',
    quote: 'Warm vocals, sharp sequencing and a closing track I keep coming back to.'
  }
];

export const USER_COLLECTIONS: readonly UserCollection[] = [
  {
    title: 'Rainy night rotation',
    curator: 'Curated by Alex',
    count: '42 albums',
    description: 'Quiet electronic, soft vocals and records that unfold slowly.'
  },
  {
    title: 'First press favorites',
    curator: 'Curated by Sam',
    count: '28 albums',
    description: 'Essential releases worth tracking, rating and revisiting.'
  },
  {
    title: 'New voices',
    curator: 'Curated by Nia',
    count: '36 albums',
    description: 'Emerging artists with bold debuts and memorable production choices.'
  }
];
