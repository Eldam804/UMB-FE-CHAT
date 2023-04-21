import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../common/service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(
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
}
