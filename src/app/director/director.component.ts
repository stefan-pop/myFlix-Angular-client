import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-director',
	templateUrl: './director.component.html',
	styleUrls: ['./director.component.scss']
})
/**
 * This class represents renders data about a director
 */
export class DirectorComponent implements OnInit {

	constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

	ngOnInit(): void {
	}

}
