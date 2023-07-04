import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  template: `<h1>Example 2</h1>`,
  styles: [`h1 { font-family: Lato; background-color: red; padding: 20px; }`]
})
export class Example2Component {

  email: string = "baran@hotmail.com";
}
