import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Simulation } from '../entity/simulation';
import { Person } from '../entity/person';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  simulationURL = "http://localhost:8080/simulations/"

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Simulation[]> {
    return this.httpClient.get<Simulation[]>(this.simulationURL)
  }

  public updateById(id: number, simulation: Simulation): Observable<any> {
    return this.httpClient.put<any>(this.simulationURL + `by-id/` + id, simulation);
  }

  public create(simulation: Simulation): Observable<any> {
    return this.httpClient.post<any>(this.simulationURL, simulation);
  }
}
