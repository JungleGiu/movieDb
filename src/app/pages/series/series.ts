import { Component } from '@angular/core';
import { MoviesList } from '../../components/movies-list/movies-list';
import { ListType } from '../../components/movies-list/movies-list';
@Component({
  selector: 'app-series',
  imports: [MoviesList],
  templateUrl: './series.html',
  styleUrl: './series.css',
})
export class Series {
topRatedURL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200';
type: ListType = 'series';
}
