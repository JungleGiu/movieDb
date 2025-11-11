import { Component, inject, signal, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api, TMDBresponse } from '../../services/api';
import { Movie } from '../../models/movie';
import { MovieCard } from '../movie-card/movie-card';
import { Thumbnails } from '../thumbnails/thumbnails';
import { Pagination } from '../pagination/pagination';
import { Tvserie } from '../../models/tvserie';
import { CrewcastMember } from '../../models/crewcast-member';

@Component({
  selector: 'app-movies-list',
  imports: [MovieCard, Pagination, Thumbnails],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList implements OnInit {
  @Input({ required: true }) originalUrl!: string;
  @Input({ required: true }) type!: ListType;
  apiCall = inject(Api);
  currentUrl = signal('');
  movies = signal<Movie[]>([]);
  tvseries = signal<Tvserie[]>([]);
  castcrew = signal<CrewcastMember[]>([]);
  moviesResponse = signal<TMDBresponse | null>(null);
  actualPage = signal(1);



  ngOnInit() {
    this.currentUrl.set(this.originalUrl);
    this.loadMovies();
  }

  loadMovies() {
    this.apiCall.getList(this.currentUrl()).subscribe({
      next: (response) => {
        this.moviesResponse.set(response);
        this.actualPage.set(response.page);
        if (this.type === 'movies' || this.type === 'thumbnails') {
          this.movies.set(response.results as Movie[]);
        }
        if (this.type === 'series') {
          this.tvseries.set(response.results as Tvserie[]);
        }
        if (this.type === 'castcrew') {
          this.castcrew.set(response.results as CrewcastMember[]);
        }
      },
      error: (error: Error) => {
  
        console.error('Error loading movies:', error);
      },
    });
  }

  onNext(page: number) {
    const newUrl = this.apiCall.changePageInUrl(this.currentUrl(), page);
    this.currentUrl.set(newUrl);
    this.loadMovies();
  }

  onPrevious(page: number) {
    const newUrl = this.apiCall.changePageInUrl(this.currentUrl(), page);
    this.currentUrl.set(newUrl);
    this.loadMovies();
  }
}

export type ListType = 'movies' | 'series' | 'castcrew' | 'thumbnails';
