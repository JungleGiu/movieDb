import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
@Input({required : true}) movie!: Movie
  baseUrl = 'https://image.tmdb.org/t/p/w600/';
}
