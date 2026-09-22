import { Component, input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../home/components/sidebar/sidebar.component';
import { TopBarComponent } from '../home/components/top-bar/top-bar.component';
import { API_BASE_URL } from '../../../core/configs/api.config';

@Component({ selector: 'app-home-top-bar', template: '' }) class TopStub {}
@Component({ selector: 'app-home-sidebar', template: '' }) class SideStub { readonly items = input<unknown>(); }

describe('Admin console', () => {
  const base = API_BASE_URL + '/admin';
  beforeEach(() => TestBed.configureTestingModule({ imports: [AdminComponent], providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()] })
    .overrideComponent(AdminComponent, { remove: { imports: [SidebarComponent, TopBarComponent] }, add: { imports: [SideStub, TopStub] } }));
  afterEach(() => TestBed.inject(HttpTestingController).verify());

  async function setup() {
    const fixture = TestBed.createComponent(AdminComponent);
    const http = TestBed.inject(HttpTestingController);
    http.expectOne(base + '/artists?page=0').flush([{ id: 'artist', name: 'Artist', blocked: false }]);
    http.expectOne(base + '/genres').flush([{ id: 'pop', name: 'Pop' }, { id: 'rock', name: 'Rock' }, { id: 'metal', name: 'Metal' }]);
    fixture.detectChanges(); await fixture.whenStable();
    return { fixture, http };
  }

  it('loads an artist and submits its edited biography with the same artist ID', async () => {
    const { fixture, http } = await setup();
    fixture.nativeElement.querySelector('.artist-row').click();
    http.expectOne(base + '/artists/artist').flush({ artist: { id: 'artist', name: 'Artist', bio: 'Old bio', artistImages: [] }, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges(); await fixture.whenStable();
    const bio = fixture.nativeElement.querySelector('textarea'); bio.value = 'New bio'; bio.dispatchEvent(new Event('input'));
    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    const save = http.expectOne(base + '/artists/artist');
    expect(save.request.method).toBe('PUT');
    expect(save.request.body).toEqual({ name: 'Artist', bio: 'New bio', genres: ['pop'] });
    save.flush({ artist: { id: 'artist', name: 'Artist', bio: 'New bio', artistImages: [] }, blocked: false, genreIds: ['pop'] });
    http.expectOne(base + '/artists?page=0').flush([]);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Artist saved.');
  });

  it('keeps flag state unchanged when a toggle fails', async () => {
    const { fixture, http } = await setup();
    fixture.nativeElement.querySelectorAll('.admin-tabs button')[1].click();
    http.expectOne(base + '/flags').flush([{ key: 'artist_catalog', description: 'Catalog', enabled: true, updatedAt: '2026-09-22T00:00:00Z' }]);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('[role=switch]').click();
    const toggle = http.expectOne(base + '/flags/artist_catalog'); expect(toggle.request.body).toEqual({ enabled: false });
    toggle.flush({}, { status: 500, statusText: 'Error' }); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role=switch]').getAttribute('aria-checked')).toBe('true');
    expect(fixture.nativeElement.textContent).toContain('Could not update the feature flag.');
  });

  it('only deletes a photo after confirmation and refreshes the gallery without losing form edits', async () => {
    const { fixture, http } = await setup();
    const artist = { id: 'artist', name: 'Artist', bio: 'Bio', artistImages: [{ id: 'photo', selected: true, urlImage: '/photo.png' }] };
    fixture.nativeElement.querySelector('.artist-row').click();
    http.expectOne(base + '/artists/artist').flush({ artist, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges(); await fixture.whenStable();
    const bio = fixture.nativeElement.querySelector('textarea');
    bio.value = 'Unsaved biography'; bio.dispatchEvent(new Event('input'));
    fixture.nativeElement.querySelector('.remove-photo').click(); fixture.detectChanges();
    http.expectNone(base + '/artists/artist/images/photo');
    fixture.nativeElement.querySelector('.photo-removal button:last-child').click(); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.photo-removal')).toBeNull();
    fixture.nativeElement.querySelector('.remove-photo').click(); fixture.detectChanges();
    fixture.nativeElement.querySelector('.confirm-remove-photo').click();
    const removal = http.expectOne(base + '/artists/artist/images/photo');
    expect(removal.request.method).toBe('DELETE'); removal.flush(null);
    http.expectOne(base + '/artists/artist').flush({ artist: { ...artist, artistImages: [] }, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.photo-grid article')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Photo removed.');
    expect(bio.value).toBe('Unsaved biography');
  });

  it('keeps the photo visible when deletion fails', async () => {
    const { fixture, http } = await setup();
    fixture.nativeElement.querySelector('.artist-row').click();
    http.expectOne(base + '/artists/artist').flush({ artist: { id: 'artist', name: 'Artist', bio: 'Bio', artistImages: [{ id: 'photo', selected: true, urlImage: '/photo.png' }] }, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.remove-photo').click(); fixture.detectChanges();
    fixture.nativeElement.querySelector('.confirm-remove-photo').click();
    http.expectOne(base + '/artists/artist/images/photo').flush({}, { status: 500, statusText: 'Error' });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.photo-grid article')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Could not remove the photo');
  });

  it('selects several genres with clicks, preserves hidden selections during search and saves all selected IDs', async () => {
    const { fixture, http } = await setup();
    const artist = { id: 'artist', name: 'Artist', bio: 'Bio', artistImages: [] };
    fixture.nativeElement.querySelector('.artist-row').click();
    http.expectOne(base + '/artists/artist').flush({ artist, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges(); await fixture.whenStable();
    const checkboxes = fixture.nativeElement.querySelectorAll('.genre-option input');
    expect(checkboxes[0].checked).toBe(true);
    checkboxes[1].click(); fixture.detectChanges();
    const search = fixture.nativeElement.querySelector('.genre-search input');
    search.value = 'metal'; search.dispatchEvent(new Event('input')); fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.genre-option').length).toBe(1);
    fixture.nativeElement.querySelector('.genre-option input').click(); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.genre-picker legend').textContent).toContain('3 selected');
    fixture.nativeElement.querySelector('[aria-label="Remove Pop"]').click(); fixture.detectChanges();
    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    const save = http.expectOne(base + '/artists/artist');
    expect(save.request.body.genres).toEqual(['rock', 'metal']);
    save.flush({ artist, blocked: false, genreIds: ['rock', 'metal'] });
    http.expectOne(base + '/artists?page=0').flush([]);
  });

  it('uploads a separate background, shows its quality warning and allows restoring the main photo', async () => {
    const { fixture, http } = await setup();
    const artist = { id: 'artist', name: 'Artist', bio: 'Bio', artistImages: [] };
    fixture.nativeElement.querySelector('.artist-row').click();
    http.expectOne(base + '/artists/artist').flush({ artist, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges(); await fixture.whenStable();
    const input = fixture.nativeElement.querySelector('.banner-editor input');
    const file = new File(['test upload'], 'banner.png', { type: 'image/png' });
    Object.defineProperty(input, 'files', { value: [file] });
    input.dispatchEvent(new Event('change'));
    const upload = http.expectOne(base + '/artists/artist/banner');
    expect(upload.request.method).toBe('POST');
    expect(upload.request.body.get('file')).toBe(file);
    upload.flush({});
    http.expectOne(base + '/artists/artist').flush({ artist: { ...artist, bannerImage: 'iVBORw0KGgo=' }, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('2560 × 960 px');
    const preview = fixture.nativeElement.querySelector('.banner-preview');
    Object.defineProperty(preview, 'naturalWidth', { value: 640 });
    Object.defineProperty(preview, 'naturalHeight', { value: 240 });
    preview.dispatchEvent(new Event('load')); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.quality-warning')).not.toBeNull();
    fixture.nativeElement.querySelector('.banner-editor button').click();
    const remove = http.expectOne(base + '/artists/artist/banner');
    expect(remove.request.method).toBe('DELETE'); remove.flush(null);
    http.expectOne(base + '/artists/artist').flush({ artist, blocked: false, genreIds: ['pop'] });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Background reset to the main photo.');
  });
});
