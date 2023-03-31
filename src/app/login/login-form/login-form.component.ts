import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  userForm: FormGroup;


  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  getUsernameError() {
    if(this.userForm.controls["username"].invalid){
      return "Enter a value"
    }
    return null
  }

  getPasswordError() {
    if(this.userForm.controls["password"].invalid){
      return "Enter a value"
    }
    return null
  }

  submit() {
    //TODO kontrola ci uzivatel existuje -> vyrobit emit a ulozit token
    if(this.userForm.controls["username"].value == "admin" && this.userForm.controls["password"].value == "admin"){
      console.log("Success");
    }else{
      console.log("Failure")
    }
  }
}
