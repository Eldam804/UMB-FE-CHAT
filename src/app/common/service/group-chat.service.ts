import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class GroupChatService {
  private url = "http://localhost:8080/api/group-message"
  private userApiUrl = "http://localhost:8080/api/user/details"

  constructor(private http: HttpClient, private authentication: AuthenticationService) { }

  getAllGroupMessages(groupId: number): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.url + "/" + groupId);
  }

  postGroupMessage(groupId: number, params: any): Observable<void>{
    return this.http.post<void>(this.url + "/" + groupId, params);
  }

  getUserId(): Observable<any>{
    return this.http.get<any>(this.userApiUrl + "/" + this.authentication.getToken());
  }
  setGroupId(groupId: string): void {
    localStorage.setItem("groupId", groupId);
  }
  getGroupId(): number{
    let userId = localStorage.getItem("groupId");
    if(userId == null){
      return -1;
    }
    // console.log(userId);
    return parseInt(userId);
  }

}
