import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

      getDistances(): Observable<DistanceResponse> {
        return this.http.get<DistanceResponse>(
          'http://localhost:3000/historic?pageNumber=1',
          {responseType: 'json'});
      }

      getHeartbeat(): Observable<Heartbeat>{
        return this.http.get<Heartbeat>(
          'http://localhost:3000/heartbeat',
          {responseType: 'json'}
        )
      }
      
}