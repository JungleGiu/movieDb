import { Component , inject} from '@angular/core';
import { Api } from '../../services/api';
@Component({
  selector: 'app-movies-list',
  imports: [],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList {

 apiCall = inject(Api);

 movies = this.apiCall.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200' ).subscribe((data) => {
  console.log(data);
 })
} 
