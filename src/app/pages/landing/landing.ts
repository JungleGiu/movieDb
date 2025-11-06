import { Component } from '@angular/core';
import {  MoviesList } from '../../components/movies-list/movies-list';
import { ListType } from '../../components/movies-list/movies-list';
@Component({
  selector: 'app-landing',
  imports: [MoviesList],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
topRatedURL='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'
type: ListType ='movie'
}
