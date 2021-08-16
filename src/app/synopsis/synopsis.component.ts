import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-synopsis',
	templateUrl: './synopsis.component.html',
	styleUrls: ['./synopsis.component.scss']
})
/**
 * This class represents the description of a movie. It is rendered in an Angular Material's dialog.
 */
export class SynopsisComponent implements OnInit {

	constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

	ngOnInit(): void {
	}

}
