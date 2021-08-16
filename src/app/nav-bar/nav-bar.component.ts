import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
/**
 * This is the Navigation Bar
 */
export class NavBarComponent implements OnInit {

	// username from local storage
	username: string = JSON.parse(localStorage.getItem('user')!).username;

	constructor(
		public snackBar: MatSnackBar,
		public router: Router) { }

	ngOnInit(): void {
	}

	/**
	 * Logout method that clears the local storage making the app unavailable if the user does't log back in
	 */
	logOut(): void {
		this.snackBar.open(`Goodbye ${this.username}`, 'OK', {
			duration: 2000,
			panelClass: 'success',
			verticalPosition: 'top'
		})
		localStorage.clear();
		this.router.navigate(['/welcome']);
	}
}
