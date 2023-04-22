import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../common/service/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  userForm: any;
  uniqueCodeForm: any;
  isLinear: boolean;
  createdUser: any;
  constructor(private service: RegisterService, private router: Router) {
    this.isLinear = true;
    this.userForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
    this.uniqueCodeForm = new FormGroup({
      code: new FormControl(null, Validators.required)
    });
  }

  submit() {
    const user: any = {
      username: this.userForm.controls.username,
      password: this.userForm.controls.password,
      email: this.userForm.controls.email,
      description: this.userForm.controls.description
    }
    this.service.registerUser(user).subscribe((data) => {
      this.createdUser = {
        id: data.id,
        username: data.username,
        joinDate: data.joinDate
      }
    })
  }
  onSubmit() {
    this.service.validateUser(this.createdUser.id, this.uniqueCodeForm.controls.code).subscribe(() => {
      this.router.navigate(["/login"]);
    })
  }
  getEmailError() {
    if(!this.userForm.controls["email"].email){
      return "Not a valid email address"
    }
    if(this.userForm.controls["email"].invalid){
      return "Enter a value"
    }
    return null
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

  getDescriptionError() {
    if(this.userForm.controls["description"].invalid){
      return "Enter a value"
    }
    return null
  }



  getUniqueCodeErrors() {
   if(this.uniqueCodeForm.controls["code"].invalid){
     return "Enter a value"
   }
   return null;
  }
}
