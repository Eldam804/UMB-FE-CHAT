import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Message, MessageRequest, MessageResponse, PrivateMessage} from "../../model/message.model";

@Injectable({
  providedIn: 'root'
})
export class PrivateChatService {
  private url = 'http://localhost:8080/api/private-messages'
  private userApiUrl = "http://localhost:8080/api/user/details"

  constructor(private http: HttpClient, private authentication: AuthenticationService) { }

  getALlPrivateMessages(messageRequest: any):Observable<Array<MessageResponse>>{
    return this.http.get<Array<MessageResponse>>(this.url + "/" + messageRequest.userId + "/" + messageRequest.foreignId);
  }
  postPrivateMessage(privateMessage:PrivateMessage, sentTo: number):Observable<void>{
    return this.http.post<void>(this.url + "/" + sentTo, privateMessage);
  }
  getUserId(): Observable<any>{
    return this.http.get<any>(this.userApiUrl + "/" + this.authentication.getToken());
  }
  setForeignUserId(userId: string): void {
    localStorage.setItem("foreignUser", userId);
  }
  getForeignUserId(): number{
    let userId = localStorage.getItem("foreignUser");
    if(userId == null){
      return -1;
    }
    return parseInt(userId);
  }
}
