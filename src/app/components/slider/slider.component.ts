import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../models/movies.types';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  popularMovies: Array<Movie> = [];

  @ViewChild('slickModal') slickModal: SlickCarouselComponent | undefined;

  slideConfig = {
    "slidesToShow": 8, 
    "slidesToScroll": 8,
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
  

  constructor(private moviesService: MoviesService) { 
  }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(res => this.popularMovies = res.results);
  }

  nextSlide = () => {
    this.slickModal?.slickNext();
  }

  prevSlide = () => {
    this.slickModal?.slickPrev();
  }

}
