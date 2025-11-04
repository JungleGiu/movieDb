import { Component } from '@angular/core';
import { MoviesList } from '../../components/movies-list/movies-list';
@Component({
  selector: 'app-landing',
  imports: [MoviesList],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
