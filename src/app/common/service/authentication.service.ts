import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {AuthModel} from "../../model/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = "http://localhost:8080/api/login"
  private logoutUrl = "http://localhost:8080/api/logout"
  constructor(private http: HttpClient) {

  }

  isLogged(): boolean {
    return this.getToken() !== null;
  }
  login(user: AuthModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
    });
    return this.http.post(this.apiUrl, null, {headers: headers, observe: "response"}).pipe(
      tap((response:any) => console.log(response.headers.get("Authorization"))),
      tap((response: any) => this.setToken(response.headers.get("Authorization")))
    )

    /*.pipe(
      tap((response: any) => console.log(response.headers)),

    )*/
  }

  logout(): Observable<any>{
    return this.http.delete(this.logoutUrl, {});
  }

  private setToken(authorization: string) {
    localStorage.setItem('token', authorization);
  }
  public getToken(): string | null {
    return localStorage.getItem('token');
  }}
