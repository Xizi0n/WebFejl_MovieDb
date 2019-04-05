import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  actualSearchQuery = '';
  searchedPosters = [];
  searchedPoster$ = new BehaviorSubject(this.searchedPosters);

  toCompare = [];

  posters = [];
  // tslint:disable-next-line:variable-name
  imdbApi_Host = 'movie-database-imdb-alternative.p.rapidapi.com';
  // tslint:disable-next-line:variable-name
  imdbApi_Api_key = 'ffcf0c7abdmsha3ee4aa0ab70d17p178c13jsn26d650bec355';

  constructor( private http: HttpClient) { }

  getPosters(key?: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-RapidAPI-Host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': 'ffcf0c7abdmsha3ee4aa0ab70d17p178c13jsn26d650bec355'
      })
    };
    if (key == null && key === undefined) {
      key = 'Avengers';
    }
    return this.http.get('https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&type=movie&r=json&s=' + key, httpOptions);
  }

  getDetails( imdbId ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-RapidAPI-Host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': 'ffcf0c7abdmsha3ee4aa0ab70d17p178c13jsn26d650bec355'
      })
    };
    return this.http.get('https://movie-database-imdb-alternative.p.rapidapi.com/?i=' + imdbId + '&r=json', httpOptions);
  }

}
