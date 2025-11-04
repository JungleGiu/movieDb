import { Injectable } from '@angular/core';
import { environment } from '../../env';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class Api {
  
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get( url, {
      headers: {
        'Authorization': 'Bearer ' + environment.tmdb.accessToken
      }
    });
  }
}
