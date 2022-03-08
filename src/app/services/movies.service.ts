import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieTrailer, Response, TrailerResponse } from '../models/movies.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }
  
  //${this.moviesEndpoint}popular?api_key=${this.apiKey}&language=it
  getPopularMovies = (): Observable<Response<Movie>> => {
    return this.httpClient.get<Response<Movie>>(`${environment.myServerEndpoint}popular`);
  }

  getNowPlayingMovies = (): Observable<Response<Movie>> => {
    return this.httpClient.get<Response<Movie>>(`${environment.myServerEndpoint}nowPlaying`);
  }

  getTopRatedMovies = (): Observable<Response<Movie>> => {
    return this.httpClient.get<Response<Movie>>(`${environment.myServerEndpoint}topRated`);
  }

  getSimilarMovies = (movieId: number | undefined): Observable<Response<Movie>> => {
    return this.httpClient.get<Response<Movie>>(`${environment.moviesEndpoint}${movieId}/recommendations?api_key=${environment.apiKey}&language=it`)
  }

  searchMovie = (name: string | undefined): Observable<Response<Movie>> => {
    return this.httpClient.get<Response<Movie>>(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${environment.apiKey}&language=it`)
  }

  getMovieTrailer = (movieId: number | undefined): Observable<TrailerResponse<MovieTrailer>> => {
    return this.httpClient.get<TrailerResponse<MovieTrailer>>(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${environment.apiKey}&language=it`)
  }
}
