import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { AlbumGridComponent } from './components/album-grid/album-grid.component';
import { AlbumSearchBarComponent } from './components/search-bar/album-search-bar.component';
import { GenreTabsComponent } from './components/genre-tabs/genre-tabs.component';
import { AlbumTab, CatalogAlbum } from './models/album.models';
import { AlbumsDataService } from './services/albums-data.service';

@Component({
  selector: 'app-albums',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    GenreTabsComponent,
    AlbumSearchBarComponent,
    AlbumGridComponent
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsComponent {
  private readonly albumsData = inject(AlbumsDataService);

  protected readonly tabs = this.albumsData.tabs;
  protected readonly selectedTab = signal<AlbumTab>('All');
  protected readonly searchQuery = signal('');
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Albums'
  }));

  protected readonly filteredAlbums = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const selected = this.selectedTab();

    return this.albumsData.albums.filter((album) => {
      const matchesTab = selected === 'All' || selected === 'A-Z' || album.genre === selected;
      const matchesSearch =
        !query ||
        album.title.toLowerCase().includes(query) ||
        album.artist.toLowerCase().includes(query) ||
        album.genre.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  });

  protected readonly groupedAlbums = computed(() => {
    const groups = new Map<string, CatalogAlbum[]>();
    const sorted = [...this.filteredAlbums()].sort((a, b) => a.title.localeCompare(b.title));

    for (const album of sorted) {
      const letter = album.title[0]?.toUpperCase() ?? '#';
      groups.set(letter, [...(groups.get(letter) ?? []), album]);
    }

    return [...groups.entries()].map(([letter, albums]) => ({ letter, albums }));
  });

  protected selectTab(tab: AlbumTab): void {
    this.selectedTab.set(tab);
  }

  protected updateSearch(value: string): void {
    this.searchQuery.set(value);
  }
}
