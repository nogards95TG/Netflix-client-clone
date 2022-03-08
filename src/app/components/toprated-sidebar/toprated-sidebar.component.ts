import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.types';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-toprated-sidebar',
  templateUrl: './toprated-sidebar.component.html',
  styleUrls: ['./toprated-sidebar.component.scss']
})
export class TopratedSidebarComponent implements OnInit {
  topRatedMovies: Array<Movie> | undefined = undefined;
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTopRatedMovies().subscribe(res => this.topRatedMovies = res.results);
  }

}
