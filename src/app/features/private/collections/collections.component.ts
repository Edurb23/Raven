import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { HOME_NAVIGATION } from '../home/mock/home.mock-data';
import { HomeNavigationItem } from '../home/models/home.models';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { CollectionFiltersComponent } from './components/collection-filters/collection-filters.component';
import { CollectionSearchBarComponent } from './components/collection-search-bar/collection-search-bar.component';
import { CollectionSectionComponent } from './components/collection-section/collection-section.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { CollectionFilter, MusicCollection } from './models/collection.models';
import { CollectionsDataService } from './services/collections-data.service';

@Component({
  selector: 'app-collections',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    CollectionFiltersComponent,
    CollectionSearchBarComponent,
    CollectionSectionComponent,
    CollectionCardComponent
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionsComponent {
  private readonly collectionsData = inject(CollectionsDataService);

  protected readonly filters = this.collectionsData.filters;
  protected readonly selectedFilter = signal<CollectionFilter>('All');
  protected readonly searchQuery = signal('');
  protected readonly navigation: HomeNavigationItem[] = HOME_NAVIGATION.map((item) => ({
    ...item,
    active: item.label === 'Collections'
  }));

  protected readonly filteredCollections = computed(() => {
    const selected = this.selectedFilter();
    const query = this.searchQuery().trim().toLowerCase();

    return this.collectionsData.collections.filter((collection) => {
      const matchesSearch =
        !query ||
        collection.title.toLowerCase().includes(query) ||
        collection.description.toLowerCase().includes(query) ||
        collection.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesFilter =
        selected === 'All' ||
        selected === 'A-Z' ||
        (selected === 'Your Collections' && collection.category === 'owned') ||
        (selected === 'Liked' && collection.category === 'liked') ||
        (selected === 'Trending' && collection.category === 'trending') ||
        collection.tags.includes(selected);

      return matchesSearch && matchesFilter;
    });
  });

  protected readonly yourCollections = computed(() =>
    this.filteredCollections().filter((collection) => collection.category === 'owned')
  );

  protected readonly likedCollections = computed(() =>
    this.filteredCollections().filter((collection) => collection.category === 'liked')
  );

  protected readonly hypeCollections = computed(() =>
    this.filteredCollections().filter((collection) => collection.category === 'trending')
  );

  protected readonly groupedCollections = computed(() => {
    const groups = new Map<string, MusicCollection[]>();
    const sorted = [...this.filteredCollections()].sort((a, b) => a.title.localeCompare(b.title));

    for (const collection of sorted) {
      const letter = collection.title[0]?.toUpperCase() ?? '#';
      groups.set(letter, [...(groups.get(letter) ?? []), collection]);
    }

    return [...groups.entries()].map(([letter, collections]) => ({ letter, collections }));
  });

  protected selectFilter(filter: CollectionFilter): void {
    this.selectedFilter.set(filter);
  }

  protected updateSearch(value: string): void {
    this.searchQuery.set(value);
  }
}
