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

  paginateList(url: string, page: number) {
    const newUrl = this.changePageInUrl(url, page);
    return this.http.get(newUrl, {
      headers: {
        Authorization: 'Bearer ' + environment.tmdb.accessToken,
      },
    }) as Observable<TMDBresponse>;
  }
  
  changePageInUrl(url: string , page : number){
   const urlobj = new URL(url);
   urlobj.searchParams.set('page', page.toString());
   return urlobj.toString();
  }
}
export type TMDBresponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
