import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const url = 'https://challengegabi.herokuapp.com';
const devUrl = 'http://localhost:3000';

export interface Distance {
  origin: string,
  destination: string,
  distance: number,
}

export interface DistanceResponse {
  message: Distance[]
}

export interface Heartbeat {
  message: string
}

@Injectable({
  providedIn: 'root',
})
export class DistanceListService {

    constructor(
        private http: HttpClient
      ) {}

      httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      getDistances(pageNumber: number): Observable<DistanceResponse> {
        return this.http.get<DistanceResponse>(
          `${url}/historic?pageNumber=${pageNumber}`,
          {responseType: 'json'})
      }

      getHeartbeat(): Observable<Heartbeat>{
        return this.http.get<Heartbeat>(
          `${url}/heartbeat `,
          {responseType: 'json'}
        )
      }
      
}