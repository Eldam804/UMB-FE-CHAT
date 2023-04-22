import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatFooterComponent } from './components/chat-footer/chat-footer.component';
import { GlobalChatComponent } from './chat/global-chat/global-chat.component';
import { PrivateChatComponent } from './chat/private-chat/private-chat.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthHeaderInterceptor} from "./common/service/auth-header";
import { UserListComponent } from './user/user-list/user-list.component';
import {MatTableModule} from "@angular/material/table";
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import { RegisterPageComponent } from './register/register-page/register-page.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    ChatPageComponent,
    ChatHeaderComponent,
    ChatFooterComponent,
    GlobalChatComponent,
    PrivateChatComponent,
    ChatBodyComponent,
    UserListComponent,
    UserProfileComponent,
    UserFormComponent,
    RegisterPageComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    CdkVirtualScrollViewport,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatMenuModule,
    MatStepperModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
