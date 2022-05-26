import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../entity/new-user';
import { LoginUser } from '../entity/login-user';
import { TokenUser } from '../entity/token-user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authURL = "http://localhost:8080/auth/"

  constructor(private httpClient: HttpClient) { }
  
  public register(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'register', newUser)
  }

  public login(loginUser: LoginUser): Observable<TokenUser> {
    return this.httpClient.post<TokenUser>(this.authURL + 'login', loginUser)
  }
}
