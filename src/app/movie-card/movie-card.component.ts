import { Component, OnInit } from '@angular/core';
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

	// User object
	user: any = JSON.parse(localStorage.getItem('user')!);

	// Array of favorite movies ids
	favMoviesList: any[] = this.user.favorite_movies;

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
			return this.movies;
		})
	}

	// Display genre details in a dialog
	getGenre(name: any, description: any) {
		this.dialog.open(GenreComponent, {
			data: {name, description},
		})
	}

	// Display director details in a dialog
	getDirector(name: any, bio: any, birth: any, death: any) {
		this.dialog.open(DirectorComponent, {
			data: {name, bio, birth, death}
		})
	}

	// Display movie synopsis in a dialog
	getSynopsis(title: any, imagePath: any, description: any) {
		this.dialog.open(SynopsisComponent, {
			data: {title, imagePath, description}
		})
	}

	// From here downwards are the methods for add or remove a movie to favorite list

	// Check if a movie is already in the list of favorites
	isFav(id: string) {
		return this.favMoviesList.includes(id);
	}

	// Add a movie to the list
	add(username: string, id: string) {
		if (!this.isFav(id)) {
			this.fetchApiData.addMovieToFav(username, id).subscribe(response => {
				this.snackbar.open('Added to favorites', 'OK', {
					duration: 1000,
					panelClass: 'success',
					verticalPosition: 'top',
				})
				localStorage.setItem('user', JSON.stringify(response));
				return this.favMoviesList =  JSON.parse(localStorage.getItem('user')!).favorite_movies;
			})
		}
	}

	// Remove a movie from favorites
	remove(username: string, id: string) {
		if (this.isFav(id)) {
			this.fetchApiData.removeMovieFromFav(username, id).subscribe(response => {
				this.snackbar.open('Removed from favorites', 'OK', {
					duration: 1000,
					panelClass: 'error',
					verticalPosition: 'top',
				})
				localStorage.setItem('user', JSON.stringify(response));
				return this.favMoviesList =  JSON.parse(localStorage.getItem('user')!).favorite_movies;
			})
		}
	}

}
