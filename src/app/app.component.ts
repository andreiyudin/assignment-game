import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	oddNumbers: number[] = []; //creating new array
	evenNumbers: number[] = []; //creating new array

  onIntervalFired(firedNumber: number) {
  	// console.log(firedNumber);
  	if (firedNumber % 2  === 0 ) {
  		this.evenNumbers.push(firedNumber); //adding new in array
  	} else {
  		this.oddNumbers.push(firedNumber); //adding new in array
  	}
  }

}
