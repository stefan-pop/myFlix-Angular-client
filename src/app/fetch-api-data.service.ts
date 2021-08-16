import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declare the API url that will provide data for the client app.
const apiUrl = 'https://myflix-app-1029.herokuapp.com/';


/**
 * Decorator that makes the "FetchApiDataService" service available anywhere in the app.
 */
@Injectable({
  	providedIn: 'root'
})

/**
 * This service contains the methods to access all the endpoints of the movie API
 */
export class FetchApiDataService {
	
  	/**
	* Inject the HttpClient module to the constructor params.
  	* This will provide HttpClient to the entire class, making it available via this.http
	*/
  	constructor(private http: HttpClient) { }

	/**
	 * User Registration / Create account
	 * @param userDetails
	 * @returns POST request to 'users'
	 */
  	public userRegistration(userDetails: any): Observable<any> {
		return this.http.post(apiUrl + 'users', userDetails).pipe(
	  		catchError(this.handleError)
		);
  	}

	
	/**
	 * User Login
	 * @param userDetails
	 * @returns POST request to 'login'
	 */
	public userLogin(userDetails: any): Observable<any> {
		return this.http.post(
			apiUrl + 'login',
			userDetails
		)
		.pipe(
			catchError(this.handleError)
		);
	}


	/**
	 * Get all movies
	 * @returns GET request to 'movies'
	 */
	public getMovies(): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.get(
			apiUrl + 'movies',
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Get a single movie by its title
	 * @param title 
	 * @returns GET request to 'movies/:title
	 */
	public getSingleMovie(title: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.get(
			apiUrl + `movies/${title}`,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Get data about a director
	 * @param director_name 
	 * @returns GET request to 'movies/:director_name'
	 */
	public getDirector(director_name: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.get(
			apiUrl + `movies/details/directors/${director_name}`,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Get data about a genre
	 * @param genre 
	 * @returns GET request to 'movies/:genre'
	 */
	public getGenre(genre: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.get(
			apiUrl + `movies/genres/${genre}`,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Get data about a user
	 * @param username 
	 * @returns GET request to 'users/:username'
	 */
	public getUser(username: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.get(
			apiUrl + `users/${username}`,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Get the user's list of favorite movies
	 * @param username 
	 * @returns GET request to 'users/favorites/:username'
	 */
	public getFavMovies(username: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.get(
			apiUrl + `users/favorites/${username}`,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}
	
	/**
	 * Add a movie to the list of favorite movies
	 * @param username 
	 * @param movieId 
	 * @returns POST request to 'users/:username/favorites/:movieId'
	 */
	public addMovieToFav(username: string, movieId: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.post(
			apiUrl + `users/${username}/favorites/${movieId}`,
			{/*No req body required */},
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Remove a movie from the list of favorite movies
	 * @param username 
	 * @param movieId 
	 * @returns DELETE request to 'users/:username/favorites/:movieId'
	 */
	public removeMovieFromFav(username: string, movieId: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.delete(
			apiUrl + `users/${username}/favorites/${movieId}`,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Update user's info
	 * @param username 
	 * @param newUser 
	 * @returns PUT request to 'users/:username'
	 */
	public updateUser(username: string, newUser: any): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.put(
			apiUrl + `users/${username}`,
			newUser,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			map(this.extractResponseData),
			catchError(this.handleError)
		);
	}

	/**
	 * Delete an account
	 * @param username 
	 * @returns DELETE request to 'users/:username'
	 */
	public deleteUser(username: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http.delete(
			apiUrl + `users/${username}`,
			{headers: new HttpHeaders(
				{
					Authorization: `Bearer ${token}`,
				}
			)}
		).pipe(
			catchError(this.handleError)
		);
	}


	// Private method
	private extractResponseData(res: Response | {} ): any {
		const body = res;
		return body || {};
	}


	/**
	 * Error handler for each method that uses the HTTP module
	 * @param error
	 * @returns 
	 */
  	private handleError(error: HttpErrorResponse): any {
		if (error.error instanceof ErrorEvent) {
	  		console.error('Some error occurred:', error.error.message)
		} else {
			console.error(`Error Status code ${error.status},` + `Error body is: ${error.error}`);
			return throwError('Please try again later.')
		}
  	}
}
