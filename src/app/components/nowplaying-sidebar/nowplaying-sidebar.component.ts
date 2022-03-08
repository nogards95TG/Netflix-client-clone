import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.types';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-nowplaying-sidebar',
  templateUrl: './nowplaying-sidebar.component.html',
  styleUrls: ['./nowplaying-sidebar.component.scss']
})
export class NowplayingSidebarComponent implements OnInit {
  nowPlayingMovies: Array<Movie> | undefined = undefined;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getNowPlayingMovies().subscribe(res => this.nowPlayingMovies = res.results);
  }

}
