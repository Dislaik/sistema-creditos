import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../entity/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  userURL = "http://localhost:8080/persons/"

  constructor(private httpClient: HttpClient) { }

  public findByUsername(username: string, person: Person): Observable<any> {
    return this.httpClient.post<Person>(this.userURL + 'by-username/' + username, person);
  }
}