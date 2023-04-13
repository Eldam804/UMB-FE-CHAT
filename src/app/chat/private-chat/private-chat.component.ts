import { Component } from '@angular/core';
import {Message} from "../../model/message.model";

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent {
  messages: any;
  currentUser: any;
  foreignUser: any;

  postMessage(message: any): void {

  }
}
