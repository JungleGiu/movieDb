import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Api } from './api';
import  {mockTMDBresponse, mockMovie, mockTvserie, mockCrewcastMember} from './mocks-api.spec';
import { provideHttpClient } from '@angular/common/http';


describe('Api', () => {
  let service: Api;
  let httpMock: HttpTestingController
  let baseUrl: string= 'https://api.themoviedb.org/3/'


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
   
    httpMock = TestBed.inject(HttpTestingController)
    service = TestBed.inject(Api);
  });

  afterEach(() => {
    httpMock.verify();
  });

    it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call getList and return a TMDBresponse', () => {
    service.getList(baseUrl).subscribe((response) => {   
      expect(response).toEqual(mockTMDBresponse);
    });
    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockTMDBresponse);
  });

   it('should handle HTTP error', () => {
    const mockErrorNotFound = { status: 404, statusText: 'Not Found' };
    const mockError = { status: 500, statusText: 'Internal Server Error' };
    service.getList(baseUrl).subscribe({
      next: () => fail('should have failed with 404 error'),
      error: (error) => {
        expect(error.status).toBe(404);
      },
    });

    const req = httpMock.expectOne(baseUrl);
    req.flush('Error', mockErrorNotFound);

    service.getList(baseUrl).subscribe({
      next: () => fail('should have failed with 500 error'),
      error: (error) => {
        expect(error.status).toBe(500);
      },
    })

    const req2 = httpMock.expectOne(baseUrl);
    req2.flush('Error', mockError);
  });

  it (' should call getMovieById and return a movie', () => {
    service.getMoviebyId(baseUrl+'movie/123').subscribe((response) => {
      expect(response).toEqual(mockMovie);
    });
    const req = httpMock.expectOne(baseUrl+'movie/123');
    expect(req.request.method).toBe('GET');
    req.flush(mockMovie);
  });

  it (' should call getTvserieById and return a tvserie', () => {
    service.getTvseriesbyId(baseUrl+'tv/123').subscribe((response) => {
      expect(response).toEqual(mockTvserie);
    });
    const req = httpMock.expectOne(baseUrl+'tv/123');
    expect(req.request.method).toBe('GET');
    req.flush(mockTvserie);
  });

  it (' should call getCastCrewbyId and return a crewcastMember', () => {
    service.getCastCrewbyId(baseUrl+'person/123').subscribe((response) => {
      expect(response).toEqual(mockCrewcastMember);
    });
    const req = httpMock.expectOne(baseUrl+'person/123');
    expect(req.request.method).toBe('GET');
    req.flush(mockCrewcastMember);
  });

it('should paginate results lists correctly', () => {
  const urlwithpage = 'https://api.mock.org/3/movie/top_rated?language=en-US&page=1';
  const newpage: string = service.changePageInUrl(urlwithpage, 2);
  expect(newpage).toBe('https://api.mock.org/3/movie/top_rated?language=en-US&page=2');
  service.paginateList(urlwithpage, 2).subscribe((response) => {
    expect(response).toEqual(mockTMDBresponse);
  });
  const req = httpMock.expectOne(newpage);
  expect(req.request.method).toBe('GET');
  req.flush(mockTMDBresponse);
 
  });

 })
   
