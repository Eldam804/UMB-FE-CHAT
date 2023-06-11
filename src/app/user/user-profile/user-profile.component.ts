import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../common/service/authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../../common/service/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  editing: boolean = true;
  newusername: any;
  newdescription: any;
  constructor(
    private userservice: UserService,
    private service: AuthenticationService,
    public dialogRef: MatDialogRef<UserProfileComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {}

  onNoclick(): void {
    this.dialogRef.close();
  }

  logout(): void {
    this.service.logout().subscribe(() => {
      this.dialogRef.close();
      this.router.navigate(["/login"]);
      localStorage.removeItem("token");
      localStorage.clear();
    })
  }

  edit() {
    this.editing = !this.editing;
  }

  edituser() {
  this.userservice.editUserById(this.data.id,this.newusername,this.newdescription).subscribe(()=>{
    this.onNoclick();

  })
  }
}
