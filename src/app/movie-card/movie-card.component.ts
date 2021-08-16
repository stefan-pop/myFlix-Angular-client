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
/**This class represents the homepage of the app where all the movies are displayed */
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

	/**
	 *  Method that fetches all the movies form the API and assingns the response to the "movie" property of this class.
	 */
	getAllMovies(): void {
		this.fetchApiData.getMovies().subscribe((response: any) => {
			this.movies = response;
			return this.movies;
		})
	}

	/**
	 * Display genre details in a dialog
	 * @param name 
	 * @param description 
	 */
	getGenre(name: any, description: any) {
		this.dialog.open(GenreComponent, {
			data: {name, description},
		})
	}

	/**
	 * Display director details in a dialog
	 * @param name 
	 * @param bio 
	 * @param birth 
	 * @param death 
	 */
	getDirector(name: any, bio: any, birth: any, death: any) {
		this.dialog.open(DirectorComponent, {
			data: {name, bio, birth, death}
		})
	}

	/**
	 * Display movie synopsis in a dialog
	 * @param title 
	 * @param imagePath 
	 * @param description 
	 */
	getSynopsis(title: any, imagePath: any, description: any) {
		this.dialog.open(SynopsisComponent, {
			data: {title, imagePath, description}
		})
	}

	// From here downwards are the methods for add or remove a movie to favorite list

	/**
	 * Method that checks if a movie is already in the list of favorites
	 * @param id 
	 * @returns 
	 */
	isFav(id: string) {
		return this.favMoviesList.includes(id);
	}

	/**
	 * 
	 * @param username Add a movie to favorite movies list
	 * @param id 
	 */
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

	/**
	 * 
	 * @param username Remove a movie from favorite movies list within this component
	 * @param id 
	 */
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
