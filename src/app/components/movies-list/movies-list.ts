import { Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Api, TMDBresponse } from '../../services/api';
import { Movie } from '../../models/movie';
import { MovieCard } from '../movie-card/movie-card';
import { Pagination } from '../pagination/pagination';
@Component({
  selector: 'app-movies-list',
  imports: [MovieCard, Pagination],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList {
  apiCall = inject(Api);
  topRatedUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
  movies = signal<Movie[]>([]);
  moviesResponse = signal<TMDBresponse | null>(null);
  actualPage = signal(1);
  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.apiCall.getList(this.topRatedUrl).subscribe({
      next: (response) => {
        this.moviesResponse.set(response);
        this.actualPage.set(response.page);
        this.movies.set(response.results);
      },
      error: (error) => {
        console.error('Error loading movies:', error);
      },
    });
  }

  onNext() {
    this.apiCall.paginateList(this.topRatedUrl).subscribe({
      next: (response) => {
        this.moviesResponse.set(response);
        this.actualPage.set(response.page);
        this.movies.set(response.results);
      },
      error: (error) => {
        console.error('Error loading movies:', error);
      },
    });
  }
}
