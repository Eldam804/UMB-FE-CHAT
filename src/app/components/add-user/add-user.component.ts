import {Component, Inject} from '@angular/core';
import {AuthenticationService} from "../../common/service/authentication.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../common/service/user.service";
import {GroupChatService} from "../../common/service/group-chat.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;
  groupId?: number;
  options: any;
  selected: any;
  selectedUserId: any;
  constructor(
    private service: UserService,
    private groupService: GroupChatService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    this.getUsers();
    this.getGroupId();
    this.addUserForm = new FormGroup<any>({
      user: new FormControl(null, Validators.required)
    })
  }

  onNoclick(): void {
    this.dialogRef.close();
  }

  addUser(): void {
    let params: any = {
      userId: this.selectedUserId,
      groupId: this.groupId
    }
    console.debug(params)
    this.groupService.inviteUserToExistingGroup(params).subscribe( () => {
      this.onNoclick();
    })
  }



  private getUsers() {
    this.service.getAllUsers().subscribe((users) => {
      this.options = users;
    })
  }

  private getGroupId() {
    this.groupId = this.groupService.getGroupId();
  }

  onUserSelectionChange(event: any) {
    console.log(event);
    this.selected = event.username;
    this.selectedUserId = event.id;
  }
}
