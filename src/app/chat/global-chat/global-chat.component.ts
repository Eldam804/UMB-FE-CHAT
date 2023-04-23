import { Component } from '@angular/core';
import {GlobalChatService} from "../../common/service/global-chat.service";
import {MessageResponse} from "../../model/message.model";

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.css']
})
export class GlobalChatComponent {

  messages?: Array<MessageResponse>;
  currentUser: any = "";
  constructor(private service: GlobalChatService) {
    this.getUserId();
    this.getAllMessages();
    setInterval(() => {
      this.getAllMessages();
    }, 5000)
  }

   getAllMessages(): void {
    this.service.getALlGlobalMessages().subscribe( (messages: Array<MessageResponse>) =>{
      this.messages = messages;
    })
  }

    /*setTimeout(() => {
        if (messageC)
          messageC.scrollTo(0, messageC.scrollHeight);
        //this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
      }, 600)
     */

  postMessage(message: any): void {
    console.log(this.currentUser);
    this.service.postGlobalMessage(message).subscribe( () => {
      this.getAllMessages();
      //scroll();
    })

  }

  private async getUserId() {
    await this.service.getUserId().subscribe((user: any) => {
      this.currentUser = {
        userId: user.id,
        username: user.username
      }
    })
    console.log("CURRENT USER ID: ", this.currentUser);
  }
}
