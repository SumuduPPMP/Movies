import { Component, OnInit,Input } from '@angular/core';
import { IMovieBase } from '../model/IMovieBase';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  @Input() movie: IMovieBase

  ngOnInit() {

  }

}
