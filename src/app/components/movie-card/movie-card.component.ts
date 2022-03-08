import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie, MovieTrailer } from '../../models/movies.types';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie | undefined;
  currentMovie: Movie | undefined;
  similarMovies: Array<Movie> | undefined;
  currentTrailer: MovieTrailer | undefined;

  constructor(private modalService: ModalInfoService, private moviesService: MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.getSimilarMovies(this.movie?.id).subscribe(res => this.similarMovies = res.results);
  }

  toggleModal = () => {
    this.modalService.updateModal(this.movie); 
    this.moviesService.getMovieTrailer(this.movie?.id).subscribe(res => {
      this.currentTrailer = res.results[0];
      this.modalService.updateTrailer(this.currentTrailer);
    });
    this.modalService.updateSimilar(this.similarMovies);
  }

  
}
