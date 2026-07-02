import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { LandingDataService } from '../../../core/services/landing-data.service';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { CtaLinkComponent } from '../../../shared/components/cta-link/cta-link.component';

@Component({
  selector: 'app-landing',
  imports: [
    AlbumCardComponent,
    ArtistCardComponent,
    CollectionCardComponent,
    CtaLinkComponent,
    HeroSectionComponent,
    ReviewCardComponent,
    SectionHeadingComponent,
    SiteFooterComponent,
    SiteNavComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
  private readonly landingData = inject(LandingDataService);

  protected readonly navItems = this.landingData.navItems;
  protected readonly trendingAlbums = this.landingData.trendingAlbums;
  protected readonly featuredArtists = this.landingData.featuredArtists;
  protected readonly communityReviews = this.landingData.communityReviews;
  protected readonly userCollections = this.landingData.userCollections;
}
