import { Component, inject, signal } from '@angular/core';
import { Api } from '../../services/api';
import { Movie } from '../../models/movie';
import { MovieCard } from '../movie-card/movie-card';
@Component({
  selector: 'app-movies-list',
  imports: [MovieCard],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList {
  apiCall = inject(Api);
  topRatedUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';

  movies = signal<Movie[]>([]);

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.apiCall.get(this.topRatedUrl).subscribe({
      next: (response) => {
        this.movies.update(() => response.results);
      },
      error: (error) => {
        console.error('Error loading movies:', error);
      },
    });
  }
}
