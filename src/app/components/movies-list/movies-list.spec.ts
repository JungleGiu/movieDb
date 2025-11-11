import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection,  } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MoviesList } from './movies-list';
import { ListType } from './movies-list';
import { provideHttpClient } from '@angular/common/http';
import {  mockTMDBresponse, mockMoviesList, mockTvseriesList,  mockCrewcastList } from './mocks-movie-list.spec';
describe('MoviesList', () => {
  let component: MoviesList;
  let fixture: ComponentFixture<MoviesList>;
  let httpMock: HttpTestingController
 
  let originalUrl: string;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesList],
      providers: [
        provideZonelessChangeDetection(),
         provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesList);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    originalUrl = 'http://api.mock.org/movies?&page=1';
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch movies IF TYPE IS MOVIES', () => {

    const mockResponseMovies = {
      ...mockTMDBresponse,
      results: mockMoviesList
    };
    component.originalUrl = originalUrl
    component.type = 'movies'; 
    fixture.detectChanges();
    const req = httpMock.expectOne(originalUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponseMovies);
    expect(component.movies()).toEqual(mockMoviesList);
    expect(component.movies().length).toBe(3);
  });
  it('should fetch tvseries IF TYPE IS SERIES', () => {
    const mockResponseTvseries = {
      ...mockTMDBresponse,
      results: mockTvseriesList
    }
    component.originalUrl = originalUrl
    component.type = 'series';  
    fixture.detectChanges();
    const req = httpMock.expectOne(originalUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponseTvseries);
    expect(component.tvseries()).toEqual(mockTvseriesList);
  })
  it('should fetch castcrew IF TYPE IS CASTCREW', () => {
    const mockResponseCastcrew = {
      ...mockTMDBresponse,
      results: mockCrewcastList
    }
    component.originalUrl = originalUrl
    component.type = 'castcrew';  
    fixture.detectChanges();
    const req = httpMock.expectOne(originalUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponseCastcrew);
    expect(component.castcrew()).toEqual(mockCrewcastList);
  })
});
