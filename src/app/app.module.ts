import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NowPlayingSliderComponent } from './components/now-playing-slider/now-playing-slider.component';
import { TopRatedSliderComponent } from './components/top-rated-slider/top-rated-slider.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PopularSidebarComponent } from './components/popular-sidebar/popular-sidebar.component';
import { TopratedSidebarComponent } from './components/toprated-sidebar/toprated-sidebar.component';
import { NowplayingSidebarComponent } from './components/nowplaying-sidebar/nowplaying-sidebar.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    BannerComponent,
    SidebarComponent,
    MovieCardComponent,
    NowPlayingSliderComponent,
    TopRatedSliderComponent,
    MovieModalComponent,
    HomepageComponent,
    PopularSidebarComponent,
    TopratedSidebarComponent,
    NowplayingSidebarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
