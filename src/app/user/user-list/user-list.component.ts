import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: Array<String> = ['picture', 'username', 'displayedColumns'];
  dataSource: Array<any> = [
    {userId: 1, username: "Carl"},
    {userId: 2, username: "Michael"},
    {userId: 3, username: "Adam"},
    {userId: 4, username: "Thomas"},
    {userId: 5, username: "Clara"},
    {userId: 6, username: "Jane"},
    {userId: 7, username: "Nick"},
    {userId: 8, username: "Mark"},
    {userId: 9, username: "Samuel"},
    {userId: 1, username: "Carl"},
    {userId: 2, username: "Michael"},
    {userId: 3, username: "Adam"},
    {userId: 4, username: "Thomas"},
    {userId: 5, username: "Clara"},
    {userId: 6, username: "Jane"},
    {userId: 7, username: "Nick"},
    {userId: 8, username: "Mark"},
    {userId: 9, username: "Samuel"},
    {userId: 1, username: "Carl"},
    {userId: 2, username: "Michael"},
    {userId: 3, username: "Adam"},
    {userId: 4, username: "Thomas"},
    {userId: 5, username: "Clara"},
    {userId: 6, username: "Jane"},
    {userId: 7, username: "Nick"},
    {userId: 8, username: "Mark"},
    {userId: 9, username: "Samuel"}
  ];

  onButtonClick(userId: number) {
    console.log("Button clicked: ", userId);
  }
}
