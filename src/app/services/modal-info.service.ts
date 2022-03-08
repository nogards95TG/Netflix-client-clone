import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie, MovieTrailer } from '../models/movies.types';

@Injectable({
  providedIn: 'root'
})

export class ModalInfoService {
  modalInfo = new BehaviorSubject<Movie | undefined>(undefined);
  observeMovie = this.modalInfo.asObservable();
  similarInfo = new BehaviorSubject<Movie[] | undefined>(undefined);
  similarMovies = this.similarInfo.asObservable();
  search = new BehaviorSubject<Movie[] | undefined>(undefined);
  searchResults = this.search.asObservable();
  trailerInfo = new BehaviorSubject<MovieTrailer | undefined>(undefined);
  observeTrailer = this.trailerInfo.asObservable();

  constructor() { }

  updateModal = (movie: Movie | undefined): void => {
    this.modalInfo.next(movie);
  }

  updateTrailer = (trailer: MovieTrailer | undefined): void => {
    this.trailerInfo.next(trailer);
  }

  updateSimilar = (movies: Movie[] | undefined): void => {
    this.similarInfo.next(movies);
  }

  updateSearchArray = (movies: Movie[] | undefined) => {
    this.search.next(movies);
  }
}
