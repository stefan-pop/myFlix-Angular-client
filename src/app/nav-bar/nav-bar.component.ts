import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	// username from local storage
	username: string = JSON.parse(localStorage.getItem('user')!).username;

	constructor(
		public snackBar: MatSnackBar,
		public router: Router) { }

	ngOnInit(): void {
	}

	// Logout method
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
