import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movies.types';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoPath: string = './../../../assets/netflix-logo.png';
  searchWord: string = "";
  searchMovies: Array<Movie> = [];

  constructor(
    private moviesService: MoviesService, 
    private modalService: ModalInfoService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect = () => {
    this.router.navigate(['/search']);
  }

  searchMovie = () => {
    if (this.searchWord !== "") {
      this.moviesService.searchMovie(this.searchWord).subscribe(res => {
        this.searchMovies = res.results;
        this.modalService.updateSearchArray(this.searchMovies);
        this.redirect();
      });
    }
  }

}
