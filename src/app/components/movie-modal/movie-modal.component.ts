import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie, MovieTrailer } from 'src/app/models/movies.types';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {
  currentMovie: Movie | undefined;
  currentSimilar: Movie[] | undefined;
  trailer: MovieTrailer | undefined;
  trailerUrl: string = "";
  sanitizedUrl: SafeResourceUrl | undefined;
  videoDisabled: boolean = true;
  state: "Play" | "Pause" = "Play"

  constructor(private modalService: ModalInfoService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videoDisabled = true;
    this.modalService.observeMovie.subscribe(movie => this.currentMovie = movie);
    this.modalService.similarMovies.subscribe(movies => this.currentSimilar = movies);
  }

  getSafeUrl = () => {
    this.modalService.observeTrailer.subscribe(trailer => {
      this.trailer = trailer;
      this.trailerUrl = `https://www.youtube.com/embed/${this.trailer?.key}`;
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.trailerUrl}`);
    });
  }

  playVideo = () => {
    if (this.state === "Play") {
      this.state = "Pause";
      this.videoDisabled = false;
    }
    else {
      this.state = "Play";
      this.videoDisabled = true;
    }
  }


} 