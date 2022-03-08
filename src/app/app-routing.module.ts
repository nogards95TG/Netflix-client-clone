import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NowplayingSidebarComponent } from './components/nowplaying-sidebar/nowplaying-sidebar.component';
import { PopularSidebarComponent } from './components/popular-sidebar/popular-sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { TopratedSidebarComponent } from './components/toprated-sidebar/toprated-sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'popular', component: PopularSidebarComponent },
  { path: 'nowplaying', component: NowplayingSidebarComponent },
  { path: 'toprated', component: TopratedSidebarComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
