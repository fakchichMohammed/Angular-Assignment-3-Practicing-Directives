import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-assi-practicing-directives';
  displayDetails: boolean = false;

  // <-- Add button wich says Display details
    onDisplayDetails(): void {
      // <-- Display the paragraph with a basic text like : "This is secret!"
      if (this.displayDetails == true) this.displayDetails = false;
      else this.displayDetails = true;
      //
    }
  //

  // <-- Add a paragraph to display the details

  //

  // <-- Toggle the displaying of the paragraph with the button

  //

  // <-- Log all the button clicks, and output them bellow the paragraph

  //

  // <-- Staring at the 5 log item, give all the log items a blue background, and white color using (ngClass & ngStyle)

  //
}
