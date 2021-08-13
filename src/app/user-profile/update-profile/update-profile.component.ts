import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from 'src/app/fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-update-profile',
	templateUrl: './update-profile.component.html',
	styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

	// Variable that holds the new user's info from the inputs in the view.
	@Input() newUser = {username: '', pwd:'', email:'', birth_date:''}

	// Username
	username = JSON.parse(localStorage.getItem('user')!).username;

	constructor(
		public snackbar: MatSnackBar,
		public fetchApiData: FetchApiDataService ) { }

	ngOnInit(): void {
	}

	// Method for updating user's info
	updateUser(): void {
		this.fetchApiData.updateUser(this.username, this.newUser).subscribe(response => {
			localStorage.setItem('user', JSON.stringify(response));
			this.snackbar.open('Your credentials have been updated', 'OK', {
				duration: 1000,
				panelClass: 'success',
				verticalPosition: 'top',
			})
		}, (response) => {
			console.log(response);
			this.snackbar.open('Try again', 'OK', {
				duration: 1000,
				panelClass: 'error',
				verticalPosition: 'top',
			})
		})
		setTimeout(() => {
			window.location.reload();
		}, 1000)
	}

}
