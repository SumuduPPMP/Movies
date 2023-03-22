import { AlertifyService } from './../services/alertify.service';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IMovieBase } from '../model/IMovieBase';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @ViewChild('formTabs',{static: true}) formTabs: TabsetComponent;
  addMovieForm: FormGroup
  movie = new Movie()
  cityList:any[]

  movies : IMovieBase ={
    Id :null,
    Name :null,
    Year :null
  }
  constructor(private fb: FormBuilder,
     private movieService : MoviesService,
     private router : Router,
     private altertify: AlertifyService) { }

  ngOnInit() {
    this.createAddMovieForm();
    this.movieService.getAllCities().subscribe(data =>{
      this.cityList = data
    })
  }

  createAddMovieForm(){
    this.addMovieForm = this.fb.group({
      Name: [null, Validators.required],
      Year : [null,[Validators.required, Validators.email]],
    })
  }

  onSubmit(){
    this.mapMovie()
    this.movieService.addMovie(this.movie);
    this.altertify.success("Successfully added a new movie")
  this.router.navigate(['/'])
  }
 mapMovie() : void{
   this.movie.Id = this.movieService.newMovieID();
   this.movie.Name =this.name.value
   this.movie.Year = this.year.value
 }

  get name(){
    return this.addMovieForm.get('Name') as FormControl;
  }
  get year(){
    return this.addMovieForm.get('Year') as FormControl;
  }

  // selectTab(tabId: number) {
  //   this.formTabs.tabs[tabId].active = true;
  // }

}
