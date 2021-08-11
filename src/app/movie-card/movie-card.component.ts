import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	constructor( public fetchApiData: FetchApiDataService) { }

}
