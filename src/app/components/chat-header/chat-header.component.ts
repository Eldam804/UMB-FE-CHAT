import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserProfileComponent} from "../../user/user-profile/user-profile.component";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  @Input()
  name?: string;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      //height: "220px",
      width: "240px",
      data: {
        username: "Adam",
        joinDate: "11.1.2022",
        description: "I just joined!"
      }
    })
  }
}
