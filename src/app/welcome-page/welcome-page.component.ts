import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';

@Component({
	selector: 'app-welcome-page',
	templateUrl: './welcome-page.component.html',
	styleUrls: ['./welcome-page.component.scss']
})

/**
 * This component is the entry page of the app. It contains 2 methods that open a registration respectively a login form in an Angular Material's dialog.
 */
export class WelcomePageComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	/**
	 * This method opens the dialog with the registration form when the "Sign Up" button is clicked
	 */
	openUserRegistrationDialog(): void {
		this.dialog.open(UserRegistrationFormComponent, {
			// Assign the dialog a width
			width: '280px'
		});
	}

	/**
	 * This method opens the dialog with the login form when the "Login" button is clicked
	 */
	openUserLoginDialog(): void {
		this.dialog.open(UserLoginFormComponent, {
			// Assign the dialog a width
			width: '280px'
		});
	}
}
