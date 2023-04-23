import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MessageResponse} from "../../model/message.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/user"
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
}
