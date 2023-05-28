import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {ChatPageComponent} from "./chat/chat-page/chat-page.component";
import {GlobalChatComponent} from "./chat/global-chat/global-chat.component";
import {PrivateChatComponent} from "./chat/private-chat/private-chat.component";
import {GuardService} from "./common/service/guard.service";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {RegisterPageComponent} from "./register/register-page/register-page.component";
import {GroupChatComponent} from "./chat/group-chat/group-chat.component";

const router: Routes = [
  {
  path: "login",
  component: LoginPageComponent,
  },
  {
    path: "register",
    component: RegisterPageComponent,
  },
  {
    path: "group-chat",
    canActivate: [GuardService],
    component: GroupChatComponent
  },
  {
    path: "global-chat",
    canActivate: [GuardService],
    component: GlobalChatComponent,

  },
  {
    path: "private-chat",
    canActivate: [GuardService],
    component: PrivateChatComponent
  },
  {
    path: "user-list",
    canActivate: [GuardService],
    component: UserListComponent
  },
  {
    path: "profile",
    canActivate: [GuardService],
    component: UserProfileComponent
  },
  {
    path: "**",
    component: GlobalChatComponent,
    canActivate: [GuardService]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router, {
      enableTracing: true,

    })

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
