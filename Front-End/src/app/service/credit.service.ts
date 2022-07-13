import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from '../entity/credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  creditURL = "http://localhost:8080/credits/"

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Credit[]> {
    return this.httpClient.get<Credit[]>(this.creditURL)
  }

  /*public updateById(id: number, simulation: Simulation): Observable<any> {
    return this.httpClient.put<any>(this.simulationURL + `by-id/` + id, simulation);
  }*/

  public create(credit: Credit): Observable<any> {
    return this.httpClient.post<any>(this.creditURL, credit);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.creditURL + `by-id/` + id);
  }
}
