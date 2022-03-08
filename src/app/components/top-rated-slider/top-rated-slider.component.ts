import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Movie } from 'src/app/models/movies.types';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-rated-slider',
  templateUrl: './top-rated-slider.component.html',
  styleUrls: ['./top-rated-slider.component.scss']
})
export class TopRatedSliderComponent implements OnInit {
  topRatedMovies: Array<Movie> = [];

  @ViewChild('slickModal') slickModal: SlickCarouselComponent | undefined;

  slideConfig = {
    "slidesToShow": 8, 
    "slidesToScroll": 8,
    "arrow": true,
    /* responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      
    ] */
  };

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTopRatedMovies().subscribe(res => this.topRatedMovies = res.results);
  }

  nextSlide = () => {
    this.slickModal?.slickNext();
  }

  prevSlide = () => {
    this.slickModal?.slickPrev();
  }

}
