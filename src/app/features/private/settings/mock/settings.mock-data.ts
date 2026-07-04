import { SettingOption, SettingsSection } from '../models/settings.models';

const options = (values: string[]): SettingOption[] => values.map((value) => ({ label: value, value }));

export const SETTINGS_SECTIONS: SettingsSection[] = [
  {
    id: 'general',
    title: 'General',
    description: 'Basic profile information used across Raven.',
    items: [
      { id: 'username', label: 'Username', description: 'Your unique Raven handle.', type: 'input', value: 'eduardo' },
      { id: 'displayName', label: 'Display name', description: 'The name shown on reviews and collections.', type: 'input', value: 'Eduardo Raven' },
      { id: 'bio', label: 'Bio', description: 'A short collector note for your profile.', type: 'textarea', value: 'Album collector and late-night reviewer.' },
      { id: 'country', label: 'Country', description: 'Used for community context.', type: 'select', value: 'Brazil', options: options(['Brazil', 'United States', 'Portugal', 'Japan']) },
      { id: 'timezone', label: 'Timezone', description: 'Controls dates and activity timestamps.', type: 'select', value: 'America/Sao_Paulo', options: options(['America/Sao_Paulo', 'America/New_York', 'Europe/Lisbon', 'Asia/Tokyo']) },
      { id: 'save', label: 'Save changes', description: 'Save profile settings when the API is connected.', type: 'button' }
    ]
  },
  {
    id: 'appearance',
    title: 'Appearance',
    description: 'Control how Raven feels visually.',
    items: [
      { id: 'theme', label: 'Theme', description: 'Choose the interface theme.', type: 'radio', value: 'Dark', options: options(['Dark', 'Light', 'System']) },
      { id: 'compact', label: 'Compact mode', description: 'Reduce spacing in dense catalog views.', type: 'switch', value: false },
      { id: 'reduceMotion', label: 'Reduce motion', description: 'Prefer calmer transitions.', type: 'switch', value: false },
      { id: 'animations', label: 'Animations', description: 'Enable subtle interface motion.', type: 'switch', value: true }
    ]
  },
  {
    id: 'language',
    title: 'Language',
    description: 'Choose your preferred Raven language and region.',
    items: [
      { id: 'language', label: 'Language select', description: 'Current language: English.', type: 'select', value: 'English', options: options(['English', 'Portuguese', 'Spanish', 'French', 'German', 'Japanese', 'Korean']) },
      { id: 'region', label: 'Region select', description: 'Controls regional date and catalog preferences.', type: 'select', value: 'Brazil', options: options(['Brazil', 'United States', 'Portugal', 'Spain', 'France', 'Germany', 'Japan', 'Korea']) }
    ]
  },
  {
    id: 'content',
    title: 'Content Preferences',
    description: 'Tune the albums and collections Raven shows you.',
    items: [
      { id: 'explicit', label: 'Explicit content', description: 'Allow explicit content across Raven.', type: 'switch', value: true },
      { id: 'hideExplicitCovers', label: 'Hide explicit album covers', description: 'Replace explicit artwork with neutral placeholders.', type: 'switch', value: false },
      { id: 'blurExplicitArtwork', label: 'Blur explicit artwork', description: 'Blur explicit album covers until hover.', type: 'switch', value: false },
      { id: 'safeSearch', label: 'Safe search', description: 'Filter explicit results in search and discovery.', type: 'switch', value: true },
      { id: 'albumLanguage', label: 'Preferred album language', description: 'Prioritize albums in this language.', type: 'select', value: 'Any', options: options(['Any', 'English', 'Portuguese', 'Spanish', 'Japanese', 'Korean']) }
    ]
  },
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Personalize recommendations and community highlights.',
    items: [
      { id: 'personalizedRecommendations', label: 'Personalized recommendations', description: 'Use your collection behavior to recommend albums.', type: 'switch', value: true },
      { id: 'trendingAlbums', label: 'Show trending albums', description: 'Include albums trending in the Raven community.', type: 'switch', value: true },
      { id: 'communityHighlights', label: 'Show community highlights', description: 'Surface popular reviews, lists and collector activity.', type: 'switch', value: true },
      { id: 'favoriteGenres', label: 'Favorite genres', description: 'Select genres Raven should prioritize.', type: 'multi-select', value: 'Hip-Hop, R&B, Indie', options: options(['Rock', 'Hip-Hop', 'Pop', 'R&B', 'Indie', 'Metal', 'Jazz', 'Electronic']) }
    ]
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Choose how Raven keeps you updated.',
    items: [
      { id: 'email', label: 'Email notifications', description: 'Receive important Raven updates by email.', type: 'switch', value: true },
      { id: 'favoriteArtistAlbum', label: 'New album from favorite artists', description: 'Notify when tracked artists release albums.', type: 'switch', value: true },
      { id: 'likedReview', label: 'Likes on my reviews', description: 'Notify when reviews receive likes.', type: 'switch', value: true },
      { id: 'commentedReview', label: 'Comments on my reviews', description: 'Notify when reviews receive comments.', type: 'switch', value: true },
      { id: 'newFollowers', label: 'New followers', description: 'Notify when someone follows you.', type: 'switch', value: true },
      { id: 'weeklyRecap', label: 'Weekly recap', description: 'A weekly summary of your music community.', type: 'switch', value: true }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy',
    description: 'Control what other collectors can see.',
    items: [
      { id: 'publicProfile', label: 'Public profile', description: 'Make your Raven profile public.', type: 'switch', value: true },
      { id: 'showFavorites', label: 'Show favorite albums', description: 'Display favorite albums on your profile.', type: 'switch', value: true },
      { id: 'showActivity', label: 'Show activity feed', description: 'Expose recent profile activity.', type: 'switch', value: true },
      { id: 'showFollowers', label: 'Show followers', description: 'Allow others to view follower counts.', type: 'switch', value: true },
      { id: 'privateCollections', label: 'Private collections', description: 'Default new collections to private.', type: 'switch', value: false }
    ]
  },
  {
    id: 'account',
    title: 'Account',
    description: 'Manage credentials and connected services.',
    items: [
      { id: 'email', label: 'Email', description: 'Primary login email.', type: 'input', value: 'eduardo@example.com' },
      { id: 'changePassword', label: 'Change password', description: 'Start a password change flow later.', type: 'button' },
      {
        id: 'connectedAccounts',
        label: 'Connected accounts',
        description: 'External music services planned for future integration.',
        type: 'cards',
        entries: options(['Spotify - Coming Soon', 'Last.fm - Coming Soon', 'Apple Music - Coming Soon'])
      },
      { id: 'delete', label: 'Delete account', description: 'Danger zone for permanently deleting your Raven account.', type: 'danger' }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Protect your account and sessions.',
    items: [
      { id: 'twoFactor', label: 'Two-factor authentication', description: 'Coming Soon.', type: 'cards', entries: options(['Authenticator app - Coming Soon', 'Recovery codes - Coming Soon']) },
      { id: 'sessions', label: 'Active sessions', description: 'Devices currently signed in.', type: 'list', entries: options(['Windows desktop - Active now', 'Chrome mobile - 2 days ago']) },
      { id: 'recentLogins', label: 'Recent logins', description: 'Recent account access events.', type: 'list', entries: options(['Brazil - Today at 19:42', 'Brazil - Yesterday at 22:10']) },
      { id: 'logoutAll', label: 'Logout from all devices', description: 'End all sessions when backend auth is ready.', type: 'button' }
    ]
  },
  {
    id: 'about',
    title: 'About',
    description: 'Version and project information.',
    items: [
      { id: 'frontendVersion', label: 'Frontend version', description: 'Angular client version.', type: 'input', value: '0.1.0' },
      { id: 'backendVersion', label: 'Backend version', description: 'Spring Boot API version.', type: 'input', value: 'pending' },
      { id: 'apiVersion', label: 'API version', description: 'Current API contract version.', type: 'input', value: 'mock' },
      { id: 'github', label: 'GitHub Repository', description: 'Project repository link placeholder.', type: 'link', value: 'Open GitHub Repository' },
      { id: 'swagger', label: 'Swagger Documentation', description: 'Future API documentation.', type: 'link', value: 'Open Swagger Documentation' }
    ]
  }
];
