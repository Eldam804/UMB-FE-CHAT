import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./src/login/login-page/login-page.component";
import {ChatPageComponent} from "./src/chat/chat-page/chat-page.component";

const router: Routes = [
  {
  path: "login",
  component: LoginPageComponent,
  },
  {
    path: "global-chat",
    component: ChatPageComponent,
  },
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
