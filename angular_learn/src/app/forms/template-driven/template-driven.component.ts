import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  loginModel:LoginModel;

   //loginModelC:LoginModelC;

  constructor(){
    this.loginModel = {userName:"",password:"",remmemberMe:false, country:0};
    //this.loginModelC=new LoginModelC();
  }

  save(form:NgForm)
  {
    console.log(form.value);
  }

}

interface LoginModel{
  userName:string;
  password:string;
  remmemberMe:boolean;
  country:number;

}

// class LoginModelC{
//   userName?:string;
//   password?:string;
//   remmemberMe?:boolean;
// }
