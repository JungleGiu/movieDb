import { inject, OnInit, signal, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Api } from '../../core/services/api';
import { Tvserie } from '../../core/models/tvserie';
import { NationalityTranslatePipe } from '../../shared/pipes/nationality-translate-pipe';
import { LanguagesTranslatePipe } from '../../shared/pipes/languages-translate-pipe';
@Component({
  selector: 'app-series-details',
  imports: [DatePipe, NationalityTranslatePipe, LanguagesTranslatePipe],
  templateUrl: './series-details.html',
  styleUrl: './series-details.css',
})
export class SeriesDetails implements OnInit {
  apiCall = inject(Api);

  constructor(private route: ActivatedRoute) {}

  serie = signal(<Tvserie>{});
  id!: string | null;
  baseUrl = 'https://image.tmdb.org/t/p/original/';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const url = `https://api.themoviedb.org/3/tv/${this.id}?language=en-US`;
    this.apiCall.getTvseriesbyId(url).subscribe((serie: Tvserie) => this.serie.update(() => serie));
  }
}
