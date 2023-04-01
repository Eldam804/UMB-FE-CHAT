import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  messages: Array<any> = [
    {message: "Pokusna sprava 1", sentBy: "User1"},
    {message: "Pokusna sprava 2", sentBy: "User2"},
    {message: "Pokusna sprava 3", sentBy: "User2"},
    {
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sentBy: "User1"
    },
    {message: "Pokusna sprava 4", sentBy: "User2"},
    {message: "Pokusna sprava 4", sentBy: "User2"},
    {message: "Pokusna sprava 4", sentBy: "User2"},
    {message: "Pokusna sprava 4", sentBy: "User2"},
    {message: "Pokusna sprava 4", sentBy: "User2"},
    {message: "Pokusna sprava 4", sentBy: "User2"},
  ];

  myMessage(m: any): boolean {
    if(m.sentBy === "User1"){
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

  }
}
