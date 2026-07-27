import { Component, Input } from '@angular/core';
import { Movie } from '../../../core/models/movie';
import { RouterLink } from '@angular/router';
import { Tvserie } from '../../../core/models/tvserie';
import { CrewcastMember } from '../../../core/models/crewcast-member';
@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() movie!: Movie;
  @Input() serie!: Tvserie;
  @Input() castcrew!: CrewcastMember;

  baseUrl = 'https://image.tmdb.org/t/p/w300/';
}
