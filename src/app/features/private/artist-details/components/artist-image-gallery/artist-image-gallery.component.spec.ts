import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { vi } from 'vitest';
import { ArtistImageGalleryComponent } from './artist-image-gallery.component';
import { API_BASE_URL } from '../../../../../core/configs/api.config';

describe('Artist image voting gallery', () => {
  const url = `${API_BASE_URL}/artist/artist-id/images`;
  const round = {
    weekStart: '2026-09-21', closesAt: '2026-09-28T03:00:00Z', timezone: 'America/Sao_Paulo',
    votedImageId: null as string | null,
    images: [{ id: 'a', votes: 1, selected: true }, { id: 'b', votes: 2, selected: false }]
  };

  beforeEach(() => {
    vi.useFakeTimers();
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
  });
  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
    TestBed.resetTestingModule();
    vi.useRealTimers();
  });

  function setup() {
    const fixture = TestBed.createComponent(ArtistImageGalleryComponent);
    fixture.componentRef.setInput('artist', {
      id: 'artist-id', name: 'Ariana Grande', photo: 'data:image/jpeg;base64,/9j/a',
      artistImages: [{ id: 'a', urlImage: '/9j/a', selected: true }, { id: 'b', urlImage: '/9j/b', selected: false }]
    });
    fixture.detectChanges();
    vi.advanceTimersByTime(0);
    return { fixture, http: TestBed.inject(HttpTestingController) };
  }

  it('displays photos and votes, saves a changed vote, and refreshes the elected photo', () => {
    const { fixture, http } = setup();
    const selected = vi.fn();
    fixture.componentInstance.selectedPhoto.subscribe(selected);
    http.expectOne(`${url}/votes`).flush({ ...round, votedImageId: 'a' });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.thumbnail').length).toBe(2);
    expect(fixture.nativeElement.querySelector('.vote').disabled).toBe(true);
    fixture.nativeElement.querySelector('.arrow--next').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.stage__image').getAttribute('src')).toBe('data:image/jpeg;base64,/9j/b');
    expect(fixture.nativeElement.querySelector('.vote-count strong').textContent).toBe('2');
    fixture.nativeElement.querySelector('.vote').click();
    fixture.detectChanges();
    const vote = http.expectOne(`${url}/b/vote`);
    expect(vote.request.method).toBe('PUT');
    expect(fixture.nativeElement.querySelector('.vote').disabled).toBe(true);
    vote.flush({ ...round, votedImageId: 'b', images: [{ id: 'a', votes: 0, selected: true }, { id: 'b', votes: 3, selected: false }] });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.vote').textContent).toContain('Your vote');
    expect(selected).toHaveBeenLastCalledWith('data:image/jpeg;base64,/9j/a');

    vi.advanceTimersByTime(60000);
    http.expectOne(`${url}/votes`).flush({ ...round, weekStart: '2026-09-28', votedImageId: null,
      images: [{ id: 'a', votes: 0, selected: false }, { id: 'b', votes: 0, selected: true }] });
    fixture.detectChanges();
    expect(selected).toHaveBeenLastCalledWith('data:image/jpeg;base64,/9j/b');
    expect(fixture.nativeElement.querySelector('.vote').disabled).toBe(false);
  });

  it('keeps the existing vote when saving fails and allows retrying', () => {
    const { fixture, http } = setup();
    http.expectOne(`${url}/votes`).flush({ ...round, votedImageId: 'a' });
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('.thumbnail')[1].click();
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.vote').click();
    http.expectOne(`${url}/b/vote`).flush({}, { status: 500, statusText: 'Server error' });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Could not save your vote');
    expect(fixture.nativeElement.querySelector('.vote').disabled).toBe(false);
    fixture.nativeElement.querySelector('.arrow--previous').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.vote').textContent).toContain('Your vote');
  });

  it('navigates with the keyboard and wraps at both ends', () => {
    const { fixture, http } = setup();
    http.expectOne(`${url}/votes`).flush(round);
    fixture.detectChanges();
    const viewer = fixture.nativeElement.querySelector('.viewer');
    viewer.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.thumbnail--active').getAttribute('data-photo-index')).toBe('1');
    viewer.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.thumbnail--active').getAttribute('data-photo-index')).toBe('0');
  });

  it('stops polling when the artist page is destroyed', () => {
    const { fixture, http } = setup();
    http.expectOne(`${url}/votes`).flush(round);
    fixture.destroy();
    vi.advanceTimersByTime(120000);
    http.expectNone(`${url}/votes`);
  });
});
