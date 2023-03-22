import { IMovieBase } from './../model/imoviebase';
import { MoviesService } from "./../services/movies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  constructor(private Movies_service: MoviesService) {}

  movies: Array<IMovieBase>;
  name =''
  serachName =''
  SortByParam =''
  SortDirection = 'asc'

  ngOnInit() {
    this.Movies_service.getAllMovies().subscribe(
      data => {
      this.movies = data;
      console.log(data)
    },error =>{
      console.log(error)
    }
    );
  }
  onNameFilter(){
    this.serachName = this.name
  }
  onClearFilter(){
    this.serachName =''
    this.name =''
  }
  onSortDirection(){
    if(this.SortDirection === 'desc'){
      this.SortDirection = 'asc'
    }else{
      this.SortDirection = 'desc'
    }
  }
}
