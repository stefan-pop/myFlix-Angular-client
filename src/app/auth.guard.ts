import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor( 
		public snackBar: MatSnackBar,
		public router: Router ) {}

	// Check if a token exists in the local storage which indicates if a user is logged in or not.
	checkToken(): boolean {
		return !!localStorage.getItem('token');
	}

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
