import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {ChatPageComponent} from "./chat/chat-page/chat-page.component";
import {GlobalChatComponent} from "./chat/global-chat/global-chat.component";
import {PrivateChatComponent} from "./chat/private-chat/private-chat.component";

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
