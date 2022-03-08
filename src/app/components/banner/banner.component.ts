import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.types';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  movies: Array<Movie> = [];
  randomMovie: Movie | undefined = undefined;
  bannerUrl: string | undefined = undefined;
  test: Movie | undefined = undefined;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {    
    this.moviesService.getPopularMovies().subscribe(res => {
      this.movies = res.results;
      let rand = Math.floor(Math.random() * this.movies.length);
      this.randomMovie = this.movies[rand];
      this.bannerUrl = this.randomMovie.backdrop_path;
    });
  }




  
  
  

}
