import { Component } from '@angular/core';
import { MoviesList } from '../../components/movies-list/movies-list';
import { ListType } from '../../components/movies-list/movies-list';
@Component({
  selector: 'app-cast-crew',
  imports: [MoviesList],
  templateUrl: './cast-crew.html',
  styleUrl: './cast-crew.css',
})
export class CastCrew {
castURL='https://api.themoviedb.org/3/person/popular'
type: ListType ='castcrew'
}
