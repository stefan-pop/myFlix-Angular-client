import { Component, OnInit, Input } from '@angular/core';
// This import brings in the API calls from the service file
import { FetchApiDataService } from '../fetch-api-data.service';

// This import to closes the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
	selector: 'app-user-login-form',
	templateUrl: './user-login-form.component.html',
	styleUrls: ['./user-login-form.component.scss']
})

/**
 * This class represents the login form
 */
export class UserLoginFormComponent implements OnInit {

	@Input() userData = { username: '', pwd: '' }

	constructor(
		public fetchApiData: FetchApiDataService,
		public dialogRef: MatDialogRef<UserLoginFormComponent>,
		public snackBar: MatSnackBar,
		public router: Router) { }

	ngOnInit(): void {
	}

	/**
	 * Method that sends the login form inputs to the backend
	 */
	loginUser(): void {
		this.fetchApiData.userLogin(this.userData).subscribe((response) => {
			// Logic for successful registration (implement later)
			this.dialogRef.close();
			this.router.navigate(['movies']);
			// Save token and user in local storage
			localStorage.setItem('token', response.token);
			localStorage.setItem('user', JSON.stringify(response.user));
			this.snackBar.open('Successful Login', 'OK', {
				duration: 2000,
				panelClass: 'success',
				verticalPosition: 'top',
			});
		}, (response) => {
			console.log(response);
			this.snackBar.open('Login failed', 'OK', {
				duration: 2000,
				panelClass: 'error',
				verticalPosition: 'top',
			});
		});
	}
}
