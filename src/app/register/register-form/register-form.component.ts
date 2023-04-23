import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../common/service/register.service";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {MatStepper} from "@angular/material/stepper";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterFormComponent {
  userForm: any;
  uniqueCodeForm: any;
  isLinear: boolean;
  createdUser: any;
  constructor(private service: RegisterService, private router: Router, private snackbar: MatSnackBar) {
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

  submit(stepper: MatStepper) {
    const user: any = {
      username: this.userForm.controls.username.value,
      password: this.userForm.controls.password.value,
      email: this.userForm.controls.email.value,
      description: this.userForm.controls.description.value
    }
    this.service.registerUser(user).pipe(
      catchError((error, caught) => {
        if(error.status === 401){
          this.snackbar.open("Username already exists", "Close", {
            verticalPosition: "top",
            politeness: "assertive"
          });
        }
        return throwError(error);
      })
      )
      .subscribe((data) => {
      this.createdUser = {
        id: data.id,
        username: data.username,
        joinDate: data.joinDate
      }
      stepper.next();

    })
  }
  onSubmit() {
    this.service.validateUser(this.createdUser.id, this.uniqueCodeForm.controls.code.value).subscribe(() => {
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
