import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent {
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
}
