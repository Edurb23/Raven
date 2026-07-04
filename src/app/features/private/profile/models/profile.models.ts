export interface ProfileStat {
  label: string;
  value: string;
}

export interface ProfileUser {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  memberSince: string;
  country: string;
  quote: string;
}

export interface ProfileArtist {
  name: string;
  genre: string;
  image: string;
}

export interface ProfileAlbum {
  title: string;
  artist: string;
  cover: string;
  rating: number;
}

export interface ProfileDnaItem {
  icon: string;
  label: string;
  value: string;
}

export interface GenreDistribution {
  genre: string;
  value: number;
}

export interface ProfileReview {
  album: string;
  artist: string;
  cover: string;
  rating: number;
  text: string;
  date: string;
  likes: number;
  comments: number;
}

export interface ProfileCollection {
  title: string;
  covers: string[];
  albumCount: number;
  likes: number;
  updatedAt: string;
}

export interface ProfileActivity {
  action: string;
  target: string;
  time: string;
}

export interface ProfileAchievement {
  icon: string;
  title: string;
  description: string;
}

export interface ProfileChart {
  title: string;
  points: number[];
  labels: string[];
}

export interface ProfileData {
  user: ProfileUser;
  stats: ProfileStat[];
  favoriteArtists: ProfileArtist[];
  favoriteAlbums: ProfileAlbum[];
  dna: ProfileDnaItem[];
  genreDistribution: GenreDistribution[];
  recentReviews: ProfileReview[];
  collections: ProfileCollection[];
  activity: ProfileActivity[];
  achievements: ProfileAchievement[];
  charts: ProfileChart[];
}
