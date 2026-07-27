import { Component } from '@angular/core';
import { ListType, MoviesList } from '../../shared/components/movies-list/movies-list';
@Component({
  selector: 'app-cast-crew',
  imports: [MoviesList],
  templateUrl: './cast-crew.html',
  styleUrl: './cast-crew.css',
})
export class CastCrew {
  castURL = 'https://api.themoviedb.org/3/person/popular';
  type: ListType = 'castcrew';
}
