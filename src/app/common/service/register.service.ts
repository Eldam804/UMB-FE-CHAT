import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = "http://localhost:8080/api/register"
  private validatorUrl = "http://localhost:8080/api/validate"
  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, user);
  }
  validateUser(userId: number, code: number): Observable<any>{
    return this.http.post<any>(this.validatorUrl + "/" + userId + "/" + code, {});
  }
}
