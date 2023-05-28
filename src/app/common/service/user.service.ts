import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MessageResponse} from "../../model/message.model";
import {group} from "@angular/animations";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/user"
  private invite = 'http://localhost:8080/api/user/invites'
  private groupUrl = "http://localhost:8080/api/user/groups"
  constructor(private http: HttpClient) {

    }


  getAllUsers(): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.url);
  }
  setForeignUserId(userId: string): void {
    localStorage.setItem("foreignUser", userId);
  }
  setForeignUsername(username: string):void {
    localStorage.setItem("foreignUsername", username);
  }

  getAllGroups(groupId: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.groupUrl + "/" + groupId);
  }

  getAllGroupInvite(userId: string):Observable<void>{
    return this.http.get<void>(this.url + "/invites" + "/"  + userId);
  }
  // acceptInvite(groupId: number, userId: number): Observable<any> {
  //   const invite = {
  //     groupId: groupId,
  //     userId: userId
  //   };
  //   const url = `${this.invite}/${userId}/${groupId}`;
  //   return this.http.post<any>(url, invite);
  // }
  // acceptInvite(invite: any): Observable<Array<any>> {
  //   const ginvite = `${this.invite}/${invite.userId}/${invite.groupId}`;
  //   return this.http.post<Array<any>>(invite,ginvite);
  // }

  acceptInvite(invite: any):Observable<Array<any>>{
    return this.http.post<Array<any>>(this.invite, invite);
  }

  deleteInvite(groupId: number, userId: string):Observable<void>{
    return this.http.delete<void>(this.url + "/invites" + "/" + groupId + "/" +userId);
  }


}
