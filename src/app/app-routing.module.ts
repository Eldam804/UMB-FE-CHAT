import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {ChatPageComponent} from "./chat/chat-page/chat-page.component";
import {GlobalChatComponent} from "./chat/global-chat/global-chat.component";
import {PrivateChatComponent} from "./chat/private-chat/private-chat.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";

const router: Routes = [
  {
  path: "login",
  component: LoginPageComponent,
  },
  {
    path: "global-chat",
    component: GlobalChatComponent,
  },
  {
    path: "private-chat",
    component: PrivateChatComponent
  },
  {
    path: "user-list",
    component: UserListComponent
  },
  {
    path: "profile",
    component: UserProfileComponent
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
