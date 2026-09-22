import { Component, input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ArtistsComponent } from './artists.component';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { API_BASE_URL } from '../../../core/configs/api.config';

@Component({ selector: 'app-home-top-bar', template: '' }) class TopStub {}
@Component({ selector: 'app-home-sidebar', template: '' }) class SideStub { readonly items = input<unknown>(); }

describe('Artist catalog genres', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ArtistsComponent], providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
  }).overrideComponent(ArtistsComponent, {
    remove: { imports: [SidebarComponent, TopBarComponent] }, add: { imports: [SideStub, TopStub] }
  }));
  afterEach(() => TestBed.inject(HttpTestingController).verify());

  function setup() {
    const fixture = TestBed.createComponent(ArtistsComponent);
    fixture.detectChanges();
    TestBed.inject(HttpTestingController).expectOne(req => req.url === `${API_BASE_URL}/artist`).flush([
      { idd: '2pac', name: '2Pac', genres: ['Rap', 'Hip-Hop'], bio: '', artistImages: [] },
      { idd: 'indie', name: 'Indie artist', genres: ['Indie'], bio: '', artistImages: [] },
      { idd: 'unknown', name: 'Unknown artist', genres: [], bio: '', artistImages: [] }
    ]);
    fixture.detectChanges();
    return fixture;
  }

  it('renders API genres and filters by secondary genres without misclassifying artists as Indie', () => {
    const fixture = setup();
    expect(fixture.nativeElement.querySelector('.artist-card__body p').textContent).toBe('Rap · Hip-Hop');
    expect(fixture.nativeElement.textContent).toContain('No genres available');
    const tabs = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll<HTMLButtonElement>('[role=tab]'));
    tabs.find(tab => tab.textContent?.trim() === 'Hip-Hop')!.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.artist-card').length).toBe(1);
    expect(fixture.nativeElement.querySelector('.artist-card h3').textContent).toContain('2Pac');
    tabs.find(tab => tab.textContent?.trim() === 'Indie')!.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.artist-card').length).toBe(1);
    expect(fixture.nativeElement.querySelector('.artist-card h3').textContent).toContain('Indie artist');
  });

  it('finds an artist by any API genre, including one absent from the fixed tabs', () => {
    const fixture = setup();
    const search = fixture.nativeElement.querySelector('input[type=search]');
    search.value = 'rap'; search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.artist-card').length).toBe(1);
    expect(fixture.nativeElement.querySelector('.artist-card h3').textContent).toContain('2Pac');
  });
});
