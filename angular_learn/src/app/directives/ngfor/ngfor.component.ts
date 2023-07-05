import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  names:string[] = ["John", "Mary", "Peter"];
  userList:User[] = [];
  constructor() { 
    this.userList.push(new User(1, "John", "john@outlook.com"));
    this.userList.push(new User(1, "John2", "john2@outlook.com"));
    this.userList.push(new User(1, "John3", "john3@outlook.com"));

}
}