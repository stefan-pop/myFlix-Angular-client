import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})

/**
 * This component represents the profile of a user
 */
export class UserProfileComponent implements OnInit {

	userProfile = JSON.parse(localStorage.getItem('user')!);

	constructor( 
		public router: Router,
		public snackbar: MatSnackBar,
		public fetchApiData: FetchApiDataService,
		public dialog: MatDialog ) { }

	ngOnInit(): void {
	}

	/**
	 * Method that opens the "UpdateProfileComponent" in an Angular Material's dialog
	 */
	openUpdateComponent(): void {
		this.dialog.open(UpdateProfileComponent, {
			width: '280px'
		})
	}

	/**
	 * Delete account method
	 * @param username 
	 */
	deleteAccount(username: string) {
		if (confirm("Are you sure?")) {
			this.fetchApiData.deleteUser(username).subscribe(response => {
				localStorage.clear();
				this.snackbar.open('Your account has been deleted', 'OK', {
					duration: 2000,
					verticalPosition: 'top',
				});
			})
			setTimeout(() => {
				this.router.navigate(['/welcome']);
			}, 2000)
		}
	}
}
