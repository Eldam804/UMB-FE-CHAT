import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../common/service/user.service";
import {GlobalChatService} from "../../common/service/global-chat.service";
import {T} from "@angular/cdk/keycodes";
import {GroupChatService} from "../../common/service/group-chat.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: Array<String> = ['picture', 'username', 'displayedColumns'];
  displayedColumnsGroup: Array<String> = ['picture', 'groupName', 'displayedColumns'];
  dataSource: Array<any> = [];
  currentUser: any = "";
  dataSource2: Array<any> = [];
  constructor(private userService: UserService, private router: Router, private service: GlobalChatService, private groupService: GroupChatService) {
    this.getUserId();
    this.getAllUsers();
  }

  onButtonClick(userId: number, username: string) {
    this.userService.setForeignUserId(userId.toString());
    this.userService.setForeignUsername(username);
    this.router.navigate(["private-chat"])
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe((users: any) => {
      this.dataSource = users;
    })
  }

  private async getUserId() {
    await this.service.getUserId().subscribe((user: any) => {
      this.currentUser = {
        userId: user.id,
        username: user.username
      }
      this.userService.getAllGroups(this.currentUser.userId).subscribe((groups: any) => {
        this.dataSource2 = groups;
      })
    })
    console.log("CURRENT USER ID: ", this.currentUser);
  }

  onButtonClickGroup(id: number, groupName: string) {
    this.groupService.setGroupId(id.toString());
    this.router.navigate(["group-chat"]);
  }
}



