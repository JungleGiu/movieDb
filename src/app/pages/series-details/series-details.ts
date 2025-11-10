import { Component } from '@angular/core';
import { inject, OnInit ,signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Api } from '../../services/api';
import { Tvserie } from '../../models/tvserie';
@Component({
  selector: 'app-series-details',
  imports: [DatePipe],
  templateUrl: './series-details.html',
  styleUrl: './series-details.css',
})
export class SeriesDetails implements OnInit  {
  apiCall = inject(Api);

  constructor( private route: ActivatedRoute) {}

  serie = signal(<Tvserie>{}) ;
  id!: string | null;
  baseUrl = 'https://image.tmdb.org/t/p/original/';

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      const url = `https://api.themoviedb.org/3/tv/${this.id}?language=en-US`;
      this.apiCall.getTvseriesbyId(url).subscribe((serie: Tvserie) => (this.serie.update(() => serie)));
    }
}
