import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-thumbnails',
  imports: [],
  templateUrl: './thumbnails.html',
  styleUrl: './thumbnails.css',
})
export class Thumbnails {
  @Input({ required: true}) movies: Movie[] = [];
  baseUrl = 'https://image.tmdb.org/t/p/w200/';
}
