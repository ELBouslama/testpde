import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.authService.isAuthenticated()){
  const token = localStorage.getItem('token')
    const reqClone = req.clone({
    headers : new HttpHeaders().set('Authorization',token)
    }) ;
    return next.handle(reqClone);
  }
  else {
    return next.handle(req);
  }


  }
}


export const AuthHttpInterceptor = {
  provide : HTTP_INTERCEPTORS,
  useClass : AuthInterceptor,
  multi : true
}
