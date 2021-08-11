import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
	selector: 'app-welcome-page',
	templateUrl: './welcome-page.component.html',
	styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

		// Open the dialog when the "Sign Up" button is clicked
	openUserRegistrationDialog(): void {
		this.dialog.open(UserRegistrationFormComponent, {
			// Assign the dialog a width
			width: '280px'
		});
	}

	// Open the dialog when the "Login" button is clicked
	openUserLoginDialog(): void {
		this.dialog.open(UserLoginFormComponent, {
			// Assign the dialog a width
			width: '280px'
		});
	}

	openMoviesDialog(): void {
		this.dialog.open(MovieCardComponent, {
			width: '800px'
		})
	}
}
