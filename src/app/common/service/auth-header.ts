import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const exclude = 'api/login'
    const exclude1 = 'api/register'
    const exclude2 = 'api/validate/**'
    const excludeUrls = ['api/login', 'api/register', 'api/validate/**']
    //if(req.url.search(exclude) === -1){
    if(excludeUrls.some(url => req.url.includes(url))){
      return next.handle(req);
    }
    const token = this.auth.getToken();
    if(token !== null){
      req = req.clone({headers: req.headers.append('Authorization', token)});
    }
    //}
    return next.handle(req);
  }


}
