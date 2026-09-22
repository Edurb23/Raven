import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_BASE_URL } from '../../../../core/configs/api.config';
import { ArtistsDataService } from './artists-data.service';

describe('ArtistsDataService images', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideHttpClient(), provideHttpClientTesting()]
  }));

  afterEach(() => TestBed.inject(HttpTestingController).verify());

  for (const [input, expected] of [
    ['/9j/2Q==', 'data:image/jpeg;base64,/9j/2Q=='],
    [' /9j/\n2Q== ', 'data:image/jpeg;base64,/9j/2Q=='],
    ['iVBORw0KGgo=', 'data:image/png;base64,iVBORw0KGgo='],
    ['R0lGODlh', 'data:image/gif;base64,R0lGODlh'],
    ['UklGRabc', 'data:image/webp;base64,UklGRabc'],
    ['https://example.com/photo.jpg', 'https://example.com/photo.jpg'],
    ['/raven/photo.jpg', '/raven/photo.jpg'],
    ['data:image/png;base64,abc', 'data:image/png;base64,abc'],
    ['', '']
  ]) {
    it(`resolves image ${JSON.stringify(input)}`, () => {
      let actual: string | undefined;
      TestBed.inject(ArtistsDataService).listArtists().subscribe(artists => actual = artists[0].image);
      TestBed.inject(HttpTestingController).expectOne(`${API_BASE_URL}/artist`).flush([{
        idd: 'artist-id', name: 'Artist', genres: [], bio: '',
        artistImages: [{ id: 'image-id', selected: true, urlImage: input }]
      }]);
      expect(actual).toBe(expected);
    });
  }

  it('uses an available photo when the selected image is empty', () => {
    let actual: string | undefined;
    TestBed.inject(ArtistsDataService).listArtists().subscribe(artists => actual = artists[0].image);
    TestBed.inject(HttpTestingController).expectOne(`${API_BASE_URL}/artist`).flush([{
      idd: 'artist-id', name: 'Artist', genres: [], bio: '',
      artistImages: [
        { id: 'empty', selected: true, urlImage: ' ' },
        { id: 'photo', selected: false, urlImage: '/9j/2Q==' }
      ]
    }]);
    expect(actual).toBe('data:image/jpeg;base64,/9j/2Q==');
  });
});
