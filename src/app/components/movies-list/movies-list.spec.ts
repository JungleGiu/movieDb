import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { MoviesList } from './movies-list';
import { ListType } from './movies-list';
describe('MoviesList', () => {
  let component: MoviesList;
  let fixture: ComponentFixture<MoviesList>;
  let listType: ListType;
  let originalUrl: string;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesList],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesList);
    component = fixture.componentInstance;
    listType = 'movies';
    originalUrl = 'http://api.mock.org/movies?_page=1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
