import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { AlbumCarouselComponent } from '../home/components/album-carousel/album-carousel.component';
import { ArtistCardComponent } from '../home/components/artist-card/artist-card.component';
import { CommunityFeedComponent } from '../home/components/community-feed/community-feed.component';
import { PopularAlbumsComponent } from '../home/components/popular-albums/popular-albums.component';
import { RecommendationGridComponent } from '../home/components/recommendation-grid/recommendation-grid.component';
import { ReviewCardComponent } from '../home/components/review-card/review-card.component';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { WelcomeBannerComponent } from '../home/components/welcome-banner/welcome-banner.component';
import { HomeDataService } from '../home/services/home-data.service';

@Component({
  selector: 'app-shell',
  imports: [
    RevealOnScrollDirective,
    SidebarComponent,
    TopBarComponent,
    WelcomeBannerComponent,
    AlbumCarouselComponent,
    ReviewCardComponent,
    PopularAlbumsComponent,
    ArtistCardComponent,
    CommunityFeedComponent,
    RecommendationGridComponent
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent {
  private readonly homeData = inject(HomeDataService);

  protected readonly data = this.homeData.data;
  protected readonly navigation = this.homeData.navigation;
}
