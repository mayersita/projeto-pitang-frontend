import { Filme } from './../models/filme';
import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _movieService: MovieService,
    private _router: Router) { }

  movies : Filme[];
  movie: Filme;

  ngOnInit() {
    this._movieService.getMovies().subscribe(
      response => {
        this.movies = response;
      }
    )    
  }

  goEdit(movie) {
    this._router.navigate(['filmes/detalhes', movie.id])
  }



}
