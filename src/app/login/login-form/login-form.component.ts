import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {provideRouter, Router} from "@angular/router";
import {AuthenticationService} from "../../common/service/authentication.service";
import {AuthModel} from "../../model/auth.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  userForm: FormGroup;


  constructor(private router: Router, private auth: AuthenticationService) {
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
    if(this.userForm.valid){
      if(this.userForm.controls.username.value && this.userForm.controls.password.value) {
        const user: AuthModel = {
          username: this.userForm.controls.username.value,
          password: this.userForm.controls.password.value
        }
        this.auth.login(user).subscribe(() => {
          this.router.navigate(["/global-chat"])
        })
      }
    }
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }
}
