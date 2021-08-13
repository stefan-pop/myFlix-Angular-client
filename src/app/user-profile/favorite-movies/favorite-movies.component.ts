import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from 'src/app/fetch-api-data.service';

@Component({
	selector: 'app-favorite-movies',
	templateUrl: './favorite-movies.component.html',
	styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

	// get the list of fav movies ids from local storage
	favMoviesId = JSON.parse(localStorage.getItem('user')!).favorite_movies;

	// result of "getFavMovies" method that filteres all the movies based on the ids
	favMovieList: any[] = [];

	// check if the array of favorite movies contains anything. To be used not to render the component if the list is empty
	favMoviesIdLength: number = this.favMoviesId.length;

	constructor( public fetchApiData: FetchApiDataService ) { }

	ngOnInit(): void {
		this.getFavMovies();
	}
 
	// This method makes the API cal to fetch all movies and filters the result based on the content of "favMoviesId" property of this class.
	getFavMovies(): void {
		this.fetchApiData.getMovies().subscribe((response: any) => {
			this.favMovieList = response.filter((m:any) => {
				return this.favMoviesId.indexOf(m._id) >= 0;
			});
		})
	}
}