import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = "http://localhost:8080/users/"

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userURL);
  }

  public findByUsername(username: string): Observable<any> {
    return this.httpClient.get<User>(this.userURL + 'by-username/' + username);
  }

  public updateByUsername(username: string, user: User): Observable<any> {
    return this.httpClient.put<User>(this.userURL + 'by-username/' + username, user)
  }

  public delete(username: string): Observable<any> {
    return this.httpClient.delete<any>(this.userURL + `by-username/` + username);
  }
}
