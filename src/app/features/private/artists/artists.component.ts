import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { GenreTabsComponent } from '../albums/components/genre-tabs/genre-tabs.component';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { ArtistGridComponent } from './components/artist-grid/artist-grid.component';
import { ArtistSearchBarComponent } from './components/artist-search-bar/artist-search-bar.component';
import { ArtistTab, CatalogArtist } from './models/artist.models';
import { ArtistsDataService } from './services/artists-data.service';

@Component({
  selector: 'app-artists',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    GenreTabsComponent,
    ArtistSearchBarComponent,
    ArtistGridComponent
  ],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistsComponent implements OnInit {
  private readonly artistsData = inject(ArtistsDataService);

  protected readonly tabs = this.artistsData.tabs;
  protected readonly selectedTab = signal<ArtistTab>('All');
  protected readonly searchQuery = signal('');
  protected readonly artists = signal<CatalogArtist[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Artists'
  }));

  protected readonly filteredArtists = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const selected = this.selectedTab();

    return this.artists().filter((artist) => {
      const matchesTab = selected === 'All' || selected === 'A-Z' ||
        artist.genres.some(genre => genre.toLowerCase() === selected.toLowerCase());
      const matchesSearch =
        !query ||
        artist.name.toLowerCase().includes(query) ||
        artist.genres.some(genre => genre.toLowerCase().includes(query)) ||
        artist.latestRelease.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  });

  protected readonly groupedArtists = computed(() => {
    const groups = new Map<string, CatalogArtist[]>();
    const sorted = [...this.filteredArtists()].sort((a, b) => a.name.localeCompare(b.name));

    for (const artist of sorted) {
      const letter = artist.name[0]?.toUpperCase() ?? '#';
      groups.set(letter, [...(groups.get(letter) ?? []), artist]);
    }

    return [...groups.entries()].map(([letter, artists]) => ({ letter, artists }));
  });

  ngOnInit(): void {
    this.artistsData.listArtists().subscribe({
      next: (artists) => {
        this.artists.set(artists);
        this.errorMessage.set('');
        this.isLoading.set(false);
      },
      error: (error) => {
        this.artists.set([]);
        this.errorMessage.set(error.status === 503 ? 'The artist catalog is temporarily unavailable.' : 'Sorry, we have an internal problem.');
        this.isLoading.set(false);
      }
    });
  }

  protected selectTab(tab: ArtistTab): void {
    this.selectedTab.set(tab);
  }

  protected updateSearch(value: string): void {
    this.searchQuery.set(value);
  }
}
