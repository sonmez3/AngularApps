import { Component } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent {

  //one way binding
  count:number = 1;

  writeToConsole(): void {
    console.log('Button clicked!');
  }
  increaseCount(): void {
    this.count++;

  }
}
