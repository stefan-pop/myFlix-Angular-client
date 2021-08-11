import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GenreComponent } from './genre/genre.component';
import { DirectorComponent } from './director/director.component';

const appRoutes: Routes = [
	{path: 'welcome', component: WelcomePageComponent},
	{path: 'movies', component: MovieCardComponent},
	{path: 'profile', component: UserProfileComponent},
	{path: '', redirectTo: 'welcome', pathMatch: 'prefix'},
];

@NgModule({
  	declarations: [
    	AppComponent,
		UserRegistrationFormComponent,
		UserLoginFormComponent,
  		MovieCardComponent,
    	WelcomePageComponent,
     UserProfileComponent,
     NavBarComponent,
     GenreComponent,
     DirectorComponent
  	],
  	imports: [
    	BrowserModule,
    	AppRoutingModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatDialogModule,
		MatSnackBarModule,
		FormsModule,
		MatIconModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
