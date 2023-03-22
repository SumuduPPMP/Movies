import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IMovieBase } from '../model/IMovieBase';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllCities():Observable<string[]>{
    return this.http.get<string[]>('http://localhost:5000/api/city')
  }

  getMovie(id:number){
    return this.getAllMovies().pipe(
      map(movieArray =>{
        return movieArray.find(m =>m.Id ===id)
      })
    )
  }

  getAllMovies() : Observable<Movie[]>{
    return this.http.get('data/movies.json').pipe(
      map(data =>{
        const movieArray : Array<Movie> =[]
        const localMovies = JSON.parse(localStorage.getItem('newMovie'))
        if(localMovies){
          for(const id in localMovies){
            if(localMovies.hasOwnProperty(id)){
              movieArray.push(localMovies[id])
            }
          }
        }
        for(const id in data){
          if(data.hasOwnProperty(id)){
            movieArray.push(data[id])
          }
        }
        return movieArray
      })
    )
    return this.http.get<Movie[]>('data/movies.json')
  }

  addMovie(movie:Movie){
    let newMovie =[movie]
    if(localStorage.getItem('newMovie')){
      newMovie = [movie, ...JSON.parse(localStorage.getItem('newMovie'))]
    }
    localStorage.setItem('newMovie', JSON.stringify(newMovie));
  }

  newMovieID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID') +1))
      return +localStorage.getItem('PID')
    }else{
      localStorage.setItem('PID','101')
      return 101
    }
  }
}
