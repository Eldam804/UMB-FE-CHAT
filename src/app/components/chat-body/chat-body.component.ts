import {Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message, MessageResponse} from "../../model/message.model";

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent {
  @ViewChild("messageContainer") private messageContainer!: ElementRef;

  userMessage: FormGroup<any>;
  @Input()
  currentUser?: any;
  @Input()
  foreignUser?: number;
  constructor() {
    this.userMessage = new FormGroup<any>({
      message: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      sentBy: new FormControl(null)
    })
  }

  @Input()
  messages?: Array<MessageResponse>;


  @Output()
  sendMessage = new EventEmitter<Message>;


  myMessage(m: any): boolean {
    return m.sentBy == this.currentUser.username;
  }

  getMessageError() {
    if(this.userMessage.controls["message"].invalid){
      return "Can't send empty text"
    }
    return ""
  }

  submit() {
    if (!this.userMessage.controls['message'].invalid) {
      //console.debug("SUBMITED: " + this.currentUser)
      const message: any = {
        messageContent: this.userMessage.controls["message"].value,
        sentById: this.currentUser.userId
      }
      if (this.foreignUser != undefined) {
        const message: any = {
          messageContent: this.userMessage.controls["message"].value,
          sentById: this.currentUser.userId,
          sentToId: this.foreignUser
        }
      }

      this.userMessage.reset()
      this.sendMessage.emit(message)
      const messageC = document.getElementById('messageContainer');
      setTimeout(() => {
        if (messageC)
          messageC.scrollTo(0, messageC.scrollHeight);
        //this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
      }, 1000)
    }
  }
}
