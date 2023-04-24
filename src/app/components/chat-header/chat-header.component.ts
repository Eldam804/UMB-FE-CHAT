import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserProfileComponent} from "../../user/user-profile/user-profile.component";
import {PrivateChatService} from "../../common/service/private-chat.service";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  @Input()
  name?: string;
  @Input()
  title?: string;
  @Input()
  intervalId?: number;
  currentUser: any;

  constructor(public dialog: MatDialog,private service: PrivateChatService) {
    this.getUserId();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      //height: "220px",
      width: "240px",
      data: {
        username: this.currentUser.username,
        joinDate: this.currentUser.joinDate,
        description: this.currentUser.description,
        intervalId: this.intervalId
        // username: "Adam",
        // joinDate: "11.1.2022",
        // description: "I just joined!"
      }
    })
  }
  private getUserId() {
    this.service.getUserId().subscribe((user: any) => {
      console.log("USER RETURNED: "+ user.id + user.username+ user.description + user.joinDate);
      this.currentUser = {
        userId: user.id,
        username: user.username,
        description: user.description,
        joinDate : user.joinDate
      }
    })
    console.log(this.currentUser);
  }
}
