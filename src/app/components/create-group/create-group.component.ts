import {Component, Inject} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GroupChatService} from "../../common/service/group-chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {
  groupName: string | undefined;
  selected: Array<any> = [];
  selectedIds: Array<any> = [];
  options: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: GroupChatService, private router: Router, private dialogRef: MatDialogRef<CreateGroupComponent>) {
  }


  onUserSelectionChange(event: any) {
    if(this.selected.includes(event.username)){
      const selected = this.selected.indexOf(event.username);
      this.selected.splice(selected, 1);
    }else{
      this.selected.push(event.username);
    }
    if(this.selectedIds.includes(event.id)){
      const selected = this.selectedIds.indexOf(event.id);
      this.selectedIds.splice(selected, 1);
    }else{
      this.selectedIds.push(event.id);
    }
  }

  onNoclick(): void {
    this.dialogRef.close();
  }

  createGroup(): void{
    const data: any = {
      groupName: this.groupName,
      usersInvited: this.selectedIds
    }
    console.debug(data.groupName);
    console.debug(data.usersInvited);
    this.service.createGroup(data).subscribe(() => {
      this.onNoclick();
      this.router.navigate(["user-list"]);
    })
  }
}
