import { StorageService } from './../../shared/services/storage.service';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin, IRegister, IResponse, IToken } from '../types/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  authUrl: string = `${environment.base_url}appUsers`;

  register(userFormData: any): Observable<IResponse> {

    const registerUrl = `${this.authUrl}`;

    return this.httpClient.post<IResponse>(registerUrl, userFormData)
                          .pipe(
                            // catchError(error => of(error.asdf))
                          )

  }

  login(user: ILogin): Observable<IToken> {

    const loginUrl = `${environment.base_url}Authenticate/login`;

    return this.httpClient.post<IToken>(loginUrl, user)
                          .pipe(
                            tap(result =>
                               this.storageService.addToStorage("access_token_customer", result.token))
                          )

  }

//   getUser(): string | null {
//     const token = this.storageService.getFromStroage<IToken>("access_token");

//     if(token != null && typeof token != "string") {
//       return token.username
//     }

//     return null
//   }

//   getToken(): string | null {
//     const token = this.storageService.getFromStroage<IToken>("access_token");

//     if(token != null && typeof token != "string") {
//       return token.token
//     }

//     return null

//   }


}
