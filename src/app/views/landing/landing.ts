import { Component } from '@angular/core';
import { ListType, MoviesList } from '../../shared/components/movies-list/movies-list';
@Component({
  selector: 'app-landing',
  imports: [MoviesList],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  type: ListType = 'thumbnails';
  topRatedURL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
}
