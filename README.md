# MyFlixAngularClient

## Description
Angular app that represents the frontend of a restful API.

See the live version [here](https://stefan-pop.github.io/myFlix-Angular-client/welcome1).

## Features
* Display a welcome view where users will be able to either log in or register an account.
* Once authenticated, the user can view all movies.
* Upon clicking on "synopsis", "director" or "genre" a dialog will open, where additional movie details will be displayed.
* Upon clicking on the "heart" icon, a movie will be added (full heart) or removed (empty heart) from the list of favorite movies, which can be viewed in the profile page.
* The user can also remove a movie from the list of favorite movies, from within the profile page. By hovering over a movie, the card will flip, revealing a delete icon.
* In the profile page, the user is given the option to either update or delete his account.

## Technologies
* Angular
* Angular Material
* Typescript
* RxJs

## Important
The app is NOT using form validation.

When registering or updating a user's account, make sure to apply the following instructions:
 * username - longer than 5 characters, only alphanumeric, no spaces.
 * password - longer than 8 characters
 * a valid email


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
