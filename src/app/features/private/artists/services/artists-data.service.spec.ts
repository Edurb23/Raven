import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_BASE_URL } from '../../../../core/configs/api.config';
import { ArtistsDataService } from './artists-data.service';

describe('ArtistsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideHttpClient(), provideHttpClientTesting()]
  }));

  afterEach(() => TestBed.inject(HttpTestingController).verify());

  function expectPage(page: number) {
    const request = TestBed.inject(HttpTestingController).expectOne(req =>
      req.url === `${API_BASE_URL}/artist` && req.params.get('page') === String(page));
    expect(request.request.params.get('size')).toBe('20');
    expect(request.request.params.getAll('sort')).toEqual(['name,asc', 'id,asc']);
    return request;
  }

  const artist = (id: string, name = id) => ({
    idd: id, name, genres: [], bio: '', artistImages: []
  });

  it('includes artists beyond the first API page', () => {
    let names: string[] | undefined;
    TestBed.inject(ArtistsDataService).listArtists().subscribe(artists => names = artists.map(item => item.name));
    const firstPage = Array.from({ length: 20 }, (_, index) => artist(`artist-${index}`));
    expectPage(0).flush(firstPage);
    expect(names).toBeUndefined();
    expectPage(1).flush([artist('2pac', '2Pac')]);
    expect(names).toEqual([...firstPage.map(item => item.name), '2Pac']);
  });

  it('stops after the empty page when the total is an exact page size', () => {
    let count: number | undefined;
    TestBed.inject(ArtistsDataService).listArtists().subscribe(artists => count = artists.length);
    expectPage(0).flush(Array.from({ length: 20 }, (_, index) => artist(`artist-${index}`)));
    expectPage(1).flush([]);
    expect(count).toBe(20);
  });

  it('returns an empty catalog when the API has no artists', () => {
    let count: number | undefined;
    TestBed.inject(ArtistsDataService).listArtists().subscribe(artists => count = artists.length);
    expectPage(0).flush([]);
    expect(count).toBe(0);
  });

  it('reports later page failures instead of presenting an incomplete catalog', () => {
    const next = vi.fn();
    const error = vi.fn();
    TestBed.inject(ArtistsDataService).listArtists().subscribe({ next, error });
    expectPage(0).flush(Array.from({ length: 20 }, (_, index) => artist(`artist-${index}`)));
    expectPage(1).flush(null, { status: 500, statusText: 'Server error' });
    expect(next).not.toHaveBeenCalled();
    expect(error).toHaveBeenCalledOnce();
  });

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
      expectPage(0).flush([{
        idd: 'artist-id', name: 'Artist', genres: [], bio: '',
        artistImages: [{ id: 'image-id', selected: true, urlImage: input }]
      }]);
      expect(actual).toBe(expected);
    });
  }

  it('uses an available photo when the selected image is empty', () => {
    let actual: string | undefined;
    TestBed.inject(ArtistsDataService).listArtists().subscribe(artists => actual = artists[0].image);
    expectPage(0).flush([{
      idd: 'artist-id', name: 'Artist', genres: [], bio: '',
      artistImages: [
        { id: 'empty', selected: true, urlImage: ' ' },
        { id: 'photo', selected: false, urlImage: '/9j/2Q==' }
      ]
    }]);
    expect(actual).toBe('data:image/jpeg;base64,/9j/2Q==');
  });
});
