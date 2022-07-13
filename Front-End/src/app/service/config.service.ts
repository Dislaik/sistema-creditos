import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigUser } from '../entity/config-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configURL = "http://localhost:8080/config/"

  constructor(private httpClient: HttpClient) { }

  public updateByUsername(username: string, configUser: ConfigUser): Observable<any> {
    return this.httpClient.put<ConfigUser>(this.configURL + 'by-username/' + username, configUser)
  }

  /*public findByUsername(username: string): Observable<any> {
    return this.httpClient.get<User>(this.userURL + 'by-username/' + username);
  }

  public updateByUsername(username: string, user: User): Observable<any> {
    return this.httpClient.put<User>(this.userURL + 'by-username/' + username, user)
  }*/
}
