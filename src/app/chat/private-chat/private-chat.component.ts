import { Component } from '@angular/core';
import {Message, MessageResponse} from "../../model/message.model";
import {PrivateChatService} from "../../common/service/private-chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent {
  messages: any;
  currentUser: any;
  foreignUser: any;

  constructor(private service: PrivateChatService, private router: Router) {
    this.foreignUser = this.getForeignId();
    this.getUserId();
    //this.getAllPrivateMessages();
  }
  postMessage(message: any): void {
    this.service.postPrivateMessage(message).subscribe( () => {
      this.getAllPrivateMessages();
    })
  }

  private getAllPrivateMessages() {
    let message = {
      userId: this.currentUser.userId,
      foreignId: this.foreignUser
    }
    console.error("SENDING GET")
    this.service.getALlPrivateMessages(message).subscribe((messages) => {
      this.messages = messages;
    })
  }
  private getUserId() {
    this.service.getUserId().subscribe((user: any) => {
      console.log("USER RETURNED: "+ user.id + user.username);
      this.currentUser = {
        userId: user.id,
        username: user.username
      }
      console.log("CURRENT USER ID: "+this.currentUser.userId)
      this.getAllPrivateMessages()
    })
    console.log(this.currentUser);
  }
  private getForeignId(): any {
    let userId: Number = this.service.getForeignUserId();
    if(userId == -1){
      this.router.navigate(["/user-list"]);
    }else{
      return userId;
    }
  }

}
