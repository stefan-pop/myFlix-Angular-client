import { Component, OnInit, Input } from '@angular/core';

// This import brings in the API calls from the service file
import { FetchApiDataService } from '../fetch-api-data.service';

// This import to closes the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-user-registration-form',
	templateUrl: './user-registration-form.component.html',
	styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

	@Input() userData = {username: '', pwd: '', email: '', birth_date: ''}

	constructor(
		public fetchApiData: FetchApiDataService,
		public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
		public snackBar: MatSnackBar) { }

	ngOnInit(): void {
	}

	// Send the registration form inputs to the backend
	registerUser(): void {
		this.fetchApiData.userRegistration(this.userData).subscribe((response) => {
			// Logic for successful registration (implement later)
			this.dialogRef.close();
			console.log(response);
			this.snackBar.open('Successful Registration', 'OK', {
				duration: 2000
			});
		}, (response) => {
			console.log(response);
			this.snackBar.open('Registration failed', 'OK', {
				duration: 2000
			});
		});
	}
}
