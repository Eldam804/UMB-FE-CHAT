import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message, MessageResponse} from "../../model/message.model";


@Injectable({
  providedIn: 'root'
})
export class GlobalChatService {
  private url = 'http://localhost:8080/api/global-messages'
  constructor(private http: HttpClient) { }

  getALlGlobalMessages():Observable<Array<MessageResponse>>{
    return this.http.get<Array<MessageResponse>>(this.url);
  }
  postGlobalMessage(message:Message):Observable<void>{
    console.log(message);
    return this.http.post<void>(this.url, message)
  }
}
