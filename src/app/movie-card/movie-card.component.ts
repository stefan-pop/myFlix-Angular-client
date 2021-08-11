import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

	// Variable that holds the array of movies returned by the API
	movies: any[] = [];

	constructor( 
		public fetchApiData: FetchApiDataService,
		public dialog: MatDialog) { }

	ngOnInit(): void {
		this.getAllMovies()
	}

	// Method that fetched the movies form the API and assingns the respone to "movie" variable.
	getAllMovies(): void {
		this.fetchApiData.getMovies().subscribe((response: any) => {
			this.movies = response;
			console.log(this.movies);
			return this.movies;
		})
	}

}
