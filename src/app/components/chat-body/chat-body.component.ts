import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message, MessageResponse} from "../../model/message.model";

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent {
  userMessage: FormGroup<any>;
  constructor() {
    this.userMessage = new FormGroup<any>({
      message: new FormControl(null, Validators.required),
      sentBy: new FormControl(null)
    })
  }

  @Input()
  messages?: Array<MessageResponse>;


  @Output()
  sendMessage = new EventEmitter<Message>;


  myMessage(m: any): boolean {
    if(m.sentBy === "Test1234"){
      return true;
    }
    return false;
  }

  getMessageError() {
    if(this.userMessage.controls["message"].invalid){
      return "Can't send empty text"
    }
    return ""
  }

  submit() {
    if(!this.userMessage.controls['message'].invalid){
      const message: any = {
        messageContent: this.userMessage.controls["message"].value,
        sentById: 0
      }
      this.userMessage.reset()
      this.sendMessage.emit(message)
    }
  }
}
