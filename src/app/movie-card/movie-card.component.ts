import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { DirectorComponent } from '../director/director.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

	// Variable that holds the array of movies returned by the API
	movies: any[] = [];

	constructor( 
		public snackbar: MatSnackBar,
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

	getGenre(name: any, description: any) {
		this.dialog.open(GenreComponent, {
			data: {name, description},
		})
		console.log(name)
	}

	getDirector(name: any, bio: any, birth: any, death: any) {
		this.dialog.open(DirectorComponent, {
			data: {name, bio, birth, death}
		})
	}

	getSynopsis(title: any, imagePath: any, description: any) {
		this.dialog.open(SynopsisComponent, {
			data: {title, imagePath, description}
		})
	}
}
