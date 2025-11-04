import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { Api } from '../../services/api';
@Component({
  selector: 'app-movie-details',
  imports: [DatePipe],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  apiCall = inject(Api);

  constructor( private route: ActivatedRoute) {}

  movie = signal(<Movie>{}) ;
  id!: string | null;
  baseUrl = 'https://image.tmdb.org/t/p/original/';

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      const url = `https://api.themoviedb.org/3/movie/${this.id}?language=en-US`;
      this.apiCall.getMovie(url).subscribe((movie: Movie) => (this.movie.update(() => movie)));
    }
  }

