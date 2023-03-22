import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { UserServiceService } from './services/user-service.service';
import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Resolve } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
 import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 import { TabsModule } from 'ngx-bootstrap/tabs';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailResolverService } from './movie-details/movie-detail-resolver.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieDetailsComponent,
    AddMovieComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
     TabsModule.forRoot(),
     BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'', component:MovieListComponent},
      {path:'movie-details/:id', component:MovieDetailsComponent, resolve: {movie: MovieDetailResolverService}},
      {path:'add-movie', component:AddMovieComponent},
      {path:'register', component:UserRegisterComponent},
      {path:'login', component:UserLoginComponent},
      {path:'**', component:MovieListComponent},


    ]),
  ],
  providers: [
    MoviesService,
    UserServiceService,
    AlertifyService,
    AuthService,
    MovieDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
