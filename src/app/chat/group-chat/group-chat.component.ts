import { Component } from '@angular/core';
import {MessageResponse} from "../../model/message.model";
import {GlobalChatService} from "../../common/service/global-chat.service";
import {PrivateChatService} from "../../common/service/private-chat.service";
import {Router} from "@angular/router";
import {GroupChatService} from "../../common/service/group-chat.service";

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent {
  messages: any;
  foreignUser: any;
  groupChatId: any;
  private currentUser: any;
  constructor(private service: GroupChatService, private router: Router) {
    this.groupChatId = this.getGroupChatId();
    this.getUserId();
    //this.getAllPrivateMessages();
    setInterval(() => {
      this.getAllGroupMessages();
    }, 5000)
  }
  postMessage(message: any): void {
    const messageSent: any = {
      messageContent: message.messageContent,
      sentById: message.sentById,
    }
    this.service.postGroupMessage(this.groupChatId, messageSent).subscribe( () => {
      this.getAllGroupMessages();
    })
  }

  private getAllGroupMessages() {
    let message = {
      userId: this.currentUser.userId,
      foreignId: this.foreignUser
    }
    this.service.getAllGroupMessages(this.groupChatId).subscribe((messages) => {
      this.messages = messages;
    })
  }
  private getUserId() {
    this.service.getUserId().subscribe((user: any) => {
      console.log("USER RETURNED: "+ user.id + user.username+ user.description + user.joinDate);
      this.currentUser = {
        userId: user.id,
        username: user.username,
        description: user.description ,
        joinDate : user.joinDate
      }
      console.log("CURRENT USER ID: "+this.currentUser.userId)
      this.getAllGroupMessages();
    })
    console.log(this.currentUser);
  }

  private getGroupChatId(): any {
    let groupId: Number = this.service.getGroupId();
    if(groupId == -1){
      this.router.navigate(["/user-list"]);
    }else{
      return groupId;
    }
  }
}
