import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  person1: IPerson = {firstName: 'John', lastName: 'Doe', age: 30};
  person2:any = {firstName: 'Jane', lastName: 'Doe', age: 25};

  mydate: Date = new Date();

  price: number = 1250;

}

interface IPerson {

  firstName: string;
  lastName: string;
  age: number;
}