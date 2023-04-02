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
  constructor(private service: GlobalChatService) {
    this.getAllMessages();
  }

  getAllMessages(): void {
    this.service.getALlGlobalMessages().subscribe( (messages: Array<MessageResponse>) =>{
      this.messages = messages;
    })
  }


  postMessage(message: any): void {
    this.service.postGlobalMessage(message).subscribe( () => {
      this.getAllMessages();
    })

  }
}
