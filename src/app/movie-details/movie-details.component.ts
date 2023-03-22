import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie = new Movie()
  public movieId: number
  constructor(private route: ActivatedRoute, private moviesService : MoviesService) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id']
    this.route.data.subscribe(
      (data: Movie) =>{
        this.movie = data['movie']
      }
    )

    // this.route.params.subscribe(
    //   (params) =>{
    //     this.movieId = +params['id']
    //     this.moviesService.getMovie(this.movieId).subscribe(
    //       (data : Movie) =>{
    //         this.movie = data
    //       }
    //     )
    //   }
    // )
  }

}
