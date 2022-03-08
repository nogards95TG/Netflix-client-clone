import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.types';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  searchResults: Array<Movie> | undefined = [];
  similarArray: Array<Movie> | undefined = [];
 
  constructor(private modalService: ModalInfoService, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.modalService.searchResults.subscribe(res => this.searchResults = res); 
  }

  updateModal = (movie: Movie) => {
    this.modalService.updateModal(movie);
    this.moviesService.getMovieTrailer(movie?.id).subscribe(res => {
      let trailer = res.results[0];
      this.modalService.updateTrailer(trailer);
    });
    this.moviesService.getSimilarMovies(movie.id).subscribe(res => {
      this.similarArray = res.results;
      this.modalService.updateSimilar(this.similarArray);
    })
    
  }
}
