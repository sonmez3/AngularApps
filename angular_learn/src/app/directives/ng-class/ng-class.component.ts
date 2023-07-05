import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  isBig = true;
  isRedBox = true;
  isBlueBorder = true;

  //örnek

  css:any = {redBox:true, blueBorder:true, Big:true};

  applyCss(){

    this.isBig= !this.isBig;
    this.isRedBox = !this.isRedBox;
    this.isBlueBorder = !this.isBlueBorder;
  }
}
