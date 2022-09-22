import { AuthState } from './../authentication/store/authentication.state';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { IToken } from '../authentication/types/auth.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  @Select(AuthState.getLoggedInUser) userToken!: Observable<IToken>;

  constructor() {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let tokenValue: string | null = ""

    const userToken = this.userToken.subscribe(token =>  tokenValue = token ? token.token : "");

    const requestWithToken = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', `Bearer ${tokenValue}`)
    })


    userToken.unsubscribe();

    return next.handle(requestWithToken);
  }
}
