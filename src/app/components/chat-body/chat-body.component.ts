import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message, MessageResponse} from "../../model/message.model";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements AfterViewChecked{
  @ViewChild("messageContainer") private messageContainer!: ElementRef;

  userMessage: FormGroup<any>;
  @Input()
  currentUser?: any;
  @Input()
  foreignUser?: number;
  constructor() {
    this.userMessage = new FormGroup<any>({
      message: new FormControl(null, [Validators.required]),
      sentBy: new FormControl(null)
    })
    //this.scrollToBottom()
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  @Input()
  messages?: Array<MessageResponse>;


  @Output()
  sendMessage = new EventEmitter<Message>;
  emojis: any = [
    {emojiCode: "😀"},
    {emojiCode: "😁"},
    {emojiCode: "😂"},
    {emojiCode: "😃"},
    {emojiCode: "😄"},
    {emojiCode: "😅"}
  ]


  myMessage(m: any): boolean {
    return m.sentBy == this.currentUser.username;
  }

  getMessageError() {
    if(this.userMessage.controls["message"].invalid){
      return "Can't send empty text"
    }
    return ""
  }

  scrollToBottom() {
    const messageC = document.getElementById('messageContainer');
    if (messageC)
      messageC.scrollTo(0, messageC.scrollHeight);
  }

  submit() {
    if (!this.userMessage.controls['message'].invalid) {
      //console.debug("SUBMITED: " + this.currentUser)
      let message: any = {};
      if (this.foreignUser != undefined) {
        message = {
          messageContent: this.userMessage.controls["message"].value,
          sentById: this.currentUser.userId,
          sentToId: this.foreignUser
        }
      }else{
        message = {
          messageContent: this.userMessage.controls["message"].value,
          sentById: this.currentUser.userId
        }
      }
      console.log(message);
      this.userMessage.reset()
      this.sendMessage.emit(message)
      const messageC = document.getElementById('messageContainer');
      setTimeout(() => {
        if (messageC)
          messageC.scrollTo(0, messageC.scrollHeight);
        //this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
      }, 600)
    }
  }
  addEmoji(emojiCode: string): void {
    const message = this.userMessage.controls["message"].value;
    let emoji: string = emojiCode
    if(message == null){
      this.userMessage.controls["message"].setValue(emoji);
    }else{
      this.userMessage.controls["message"].setValue(message + emoji);
    }
  }
}
