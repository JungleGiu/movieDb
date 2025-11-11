import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Api } from '../../services/api';
import {CrewcastMember} from '../../models/crewcast-member';

@Component({
  selector: 'app-cast-crew-details',
  imports: [DatePipe ],
  templateUrl: './cast-crew-details.html',
  styleUrl: './cast-crew-details.css',
})
export class CastCrewDetails implements OnInit {
    apiCall = inject(Api);

  constructor( private route: ActivatedRoute) {}

  castcrew = signal(<CrewcastMember>{}) ;
  id!: string | null;
  baseUrl = 'https://image.tmdb.org/t/p/original/';

   ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        const url = `https://api.themoviedb.org/3/person/${this.id}?language=en-US`;
        this.apiCall.getCastCrewbyId(url).subscribe((crew: CrewcastMember) => (this.castcrew.update(() => crew)));
      }
}
