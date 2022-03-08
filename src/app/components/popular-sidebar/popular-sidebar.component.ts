import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.types';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular-sidebar',
  templateUrl: './popular-sidebar.component.html',
  styleUrls: ['./popular-sidebar.component.scss']
})
export class PopularSidebarComponent implements OnInit {
  popularMovies: Array<Movie> | undefined = undefined; 


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(res => this.popularMovies = res.results);
  }

}
