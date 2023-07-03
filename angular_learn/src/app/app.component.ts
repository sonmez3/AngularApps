import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_learn';
  name: string = 'baran';
  isUser: boolean = false;
  createDate: Date = new Date();
  names:string[]= ['baran','siva','kumar'];
  isUsers:boolean[]=[true,false,true];
  
}
