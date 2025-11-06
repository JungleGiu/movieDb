import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { RouterLink } from "@angular/router";
import { Tvserie } from '../../models/tvserie';
import { CrewcastMember } from '../../models/crewcast-member';
@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() movie!: Movie ;
  @Input() serie!: Tvserie;
  @Input() castcrew!: CrewcastMember;


  baseUrl = 'https://image.tmdb.org/t/p/w300/';
}
