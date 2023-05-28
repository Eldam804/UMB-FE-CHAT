import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message, MessageResponse} from "../../model/message.model";
import {AuthenticationService} from "./authentication.service";


@Injectable({
  providedIn: 'root'
})
export class GlobalChatService {
  private url = 'http://localhost:8080/api/global-messages'



  private userApiUrl = "http://localhost:8080/api/user/details"
  constructor(private http: HttpClient, private authentication: AuthenticationService) { }


  getALlGlobalMessages():Observable<Array<MessageResponse>>{
    return this.http.get<Array<MessageResponse>>(this.url);
  }
  postGlobalMessage(message:Message):Observable<void>{
    return this.http.post<void>(this.url, message);
  }
  getUserId(): Observable<any>{
    return this.http.get<any>(this.userApiUrl + "/" + this.authentication.getToken());
  }
}
