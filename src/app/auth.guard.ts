import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})

/**
 * Can Activate guard created using the Angular CLI that check if the user is logged in, allowing or not access to a speciffic route.
 */
export class AuthGuard implements CanActivate {

	constructor( 
		public snackBar: MatSnackBar,
		public router: Router ) {}

	/**
	 *  Method that checks if a token exists in the local storage which indicates if a user is logged in or not.
	 * @returns a boolean
	 */
	checkToken(): boolean {
		return !!localStorage.getItem('token');
	}

	/**
	 * This method allows or restricts access to a route based on what the "checkToken" method returns.
	 * @returns 
	 */
	canActivate(): boolean {
		if (this.checkToken()) {
			this.snackBar.open('You are already logged in', 'OK', {
				duration: 2000,
				panelClass: 'success',
				verticalPosition: 'top'
			})
			this.router.navigate(['/movies'])
			return false
		} else {
			return true;
		}
	}	
}
