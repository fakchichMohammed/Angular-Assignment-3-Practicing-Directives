import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-assi-practicing-directives';
  displayDetails: boolean = false;
  details: string = 'This is secret !'
  logs:Array<number> = []
  logId: number = 0
  
  // <-- Add button wich says Display details
    onDisplayDetails(): void {
      // <-- Display the paragraph with a basic text like : "This is secret!"
        // <-- Toggle the displaying of the paragraph with the button clicks
          if (this.displayDetails == true) this.displayDetails = false;
          else this.displayDetails = true;
          // <-- log the button click 
            this.addLogs(this.logId+1)
          //
        //
      //
    }
  //

  // <-- Add a paragraph to display the details

  //

  // <-- Log all the button clicks, and output them bellow the paragraph
    addLogs(log: number): void {
      // <-- add logs to the array when the button is clicked
        this.logs.push(log)
      //
    }
  //

  // <-- Staring at the 5 log item, give all the log items a blue background, and white color using (ngClass & ngStyle)

  //
}
