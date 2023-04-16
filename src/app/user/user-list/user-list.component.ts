import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PrivateChatService} from "../../common/service/private-chat.service";
import {UserService} from "../../common/service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: Array<String> = ['picture', 'username', 'displayedColumns'];
  dataSource: Array<any> = [];

  constructor(private userService: UserService, private router: Router) {
    this.getAllUsers();
  }

  onButtonClick(userId: number) {
    this.userService.setForeignUserId(userId.toString());
    this.router.navigate(["private-chat"])
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe((users: any) => {
      this.dataSource = users;
    })
  }
}
