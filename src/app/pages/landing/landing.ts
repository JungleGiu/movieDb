import { Component } from '@angular/core';
import { MoviesList } from '../../components/movies-list/movies-list';
import { ListType } from '../../components/movies-list/movies-list';
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
