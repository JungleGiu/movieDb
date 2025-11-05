import { Injectable } from '@angular/core';
import { environment } from '../../env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  getList(url: string) {
    return this.http.get(url, {
      headers: {
        Authorization: 'Bearer ' + environment.tmdb.accessToken,
      },
    }) as Observable<TMDBresponse>;
  }

  getMoviebyId(url: string) {
    return this.http.get( url, {
        headers: {
          Authorization: 'Bearer ' + environment.tmdb.accessToken,
        },
      }
    ) as Observable<Movie>;
  }

  paginateList(url: string) {
    const regex = /&page=/gm;
    if (regex.test(url)) {
      const indexRegex = url.indexOf('page=');
      const numIndex = indexRegex + 5;
      url = url.replace( url[numIndex], (Number(url[numIndex]) + 1).toString());
    }
    return this.http.get(url, {
      headers: {
        Authorization: 'Bearer ' + environment.tmdb.accessToken,
      },
    }) as Observable<TMDBresponse>;
  }

}
export type TMDBresponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
