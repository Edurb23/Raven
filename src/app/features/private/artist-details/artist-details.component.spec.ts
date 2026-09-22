import { Component, input, output } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ArtistHeroComponent } from './components/artist-hero/artist-hero.component';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ArtistDetailsComponent } from './artist-details.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { API_BASE_URL } from '../../../core/configs/api.config';
import { ArtistImageGalleryComponent } from './components/artist-image-gallery/artist-image-gallery.component';
import { ArtistPage } from './services/artist-details-data.service';

@Component({ selector: 'app-home-top-bar', template: '' })
class TopBarStub {}

@Component({ selector: 'app-artist-image-gallery', template: '' })
class GalleryStub {
  readonly artist = input.required<ArtistPage>();
  readonly selectedPhoto = output<string>();
}

describe('Artist details routing', () => {
  let params: BehaviorSubject<ReturnType<typeof convertToParamMap>>;
  let http: HttpTestingController;

  beforeEach(() => {
    params = new BehaviorSubject(convertToParamMap({ id: 'ariana-id' }));
    TestBed.configureTestingModule({
      imports: [ArtistDetailsComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: { paramMap: params } }]
    }).overrideComponent(ArtistDetailsComponent, {
      remove: { imports: [TopBarComponent, ArtistImageGalleryComponent] }, add: { imports: [TopBarStub, GalleryStub] }
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('loads the selected artist and refreshes when the route ID changes', () => {
    const fixture = TestBed.createComponent(ArtistDetailsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Loading artist');
    http.expectOne(`${API_BASE_URL}/artist/ariana-id`).flush({
      id: 'ariana-id', name: 'Ariana Grande', genres: ['Pop'], bio: 'Ariana biography',
      artistImages: [{ selected: true, urlImage: '/9j/2Q==' }]
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Ariana Grande');
    expect(fixture.nativeElement.textContent).toContain('Ariana biography');
    expect(fixture.nativeElement.textContent).not.toContain('Kendrick');
    expect(fixture.nativeElement.querySelector('app-artist-image-gallery')).toBeNull();
    expect(fixture.nativeElement.querySelector('.photos-entry').getAttribute('href')).toBe('/app/artists/ariana-id/photos');
    expect(fixture.nativeElement.querySelector('.artist-hero__photo').getAttribute('src'))
      .toBe('data:image/jpeg;base64,/9j/2Q==');

    params.next(convertToParamMap({ id: 'radiohead-id' }));
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).not.toContain('Ariana Grande');
    http.expectOne(`${API_BASE_URL}/artist/radiohead-id`).flush({
      id: 'radiohead-id', name: 'Radiohead', genres: [], bio: '', artistImages: []
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Radiohead');
    expect(fixture.nativeElement.querySelector('.artist-hero__photo')).toBeNull();
  });

  it('shows a not-found state without falling back to a mock artist', () => {
    const fixture = TestBed.createComponent(ArtistDetailsComponent);
    fixture.detectChanges();
    http.expectOne(`${API_BASE_URL}/artist/ariana-id`).flush({}, { status: 404, statusText: 'Not Found' });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Artist not found.');
    expect(fixture.nativeElement.querySelector('app-artist-hero')).toBeNull();
  });

  it('uses the custom background separately from the main photo', () => {
    const fixture = TestBed.createComponent(ArtistDetailsComponent);
    fixture.detectChanges();
    http.expectOne(`${API_BASE_URL}/artist/ariana-id`).flush({
      id: 'ariana-id', name: 'Ariana Grande', genres: [], bio: '',
      bannerImage: 'iVBORw0KGgo=',
      artistImages: [{ selected: true, urlImage: '/9j/2Q==' }]
    });
    fixture.detectChanges();
    const hero = fixture.debugElement.query(By.directive(ArtistHeroComponent)).componentInstance as ArtistHeroComponent;
    expect(hero.artist().banner).toBe('data:image/png;base64,iVBORw0KGgo=');
    expect(hero.artist().photo).toBe('data:image/jpeg;base64,/9j/2Q==');
  });

  it('shows the gallery on the dedicated photos route without the full artist hero', () => {
    const route = TestBed.inject(ActivatedRoute);
    Object.defineProperty(route, 'snapshot', { value: { data: { view: 'photos' } } });
    const fixture = TestBed.createComponent(ArtistDetailsComponent);
    fixture.detectChanges();
    http.expectOne(`${API_BASE_URL}/artist/ariana-id`).flush({
      id: 'ariana-id', name: 'Ariana Grande', genres: ['Pop'], bio: '', artistImages: []
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-artist-hero')).toBeNull();
    expect(fixture.nativeElement.querySelector('app-artist-image-gallery')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.photos-back').getAttribute('href')).toBe('/app/artists/ariana-id');
  });
});
