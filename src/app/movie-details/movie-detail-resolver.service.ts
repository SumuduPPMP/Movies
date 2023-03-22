import { MoviesService } from './../services/movies.service';
import { Movie } from './../model/movie';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolverService implements Resolve<Movie> {

  constructor(private moviesService:MoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Movie>| Movie
{
  const movieId = route.params['id']
  return this.moviesService.getMovie(+movieId).pipe(
    catchError(error =>{
      this.router.navigate(['/'])
      return of(null)
    })
  )
}}
