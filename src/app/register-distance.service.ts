import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Distance {
    origin: string;
    destination: string;
    distance: number;
}

export interface DistanceResponse {
  message: Distance
}
const url = 'https://challengegabi.herokuapp.com';
const devUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class RegisterDistanceService {
 
    constructor(
        private http: HttpClient
      ) {}

      postDistances(body: Distance) {
        return this.http.post<DistanceResponse>(
          `${url}/distance`,
          body,
          {responseType: 'json'}
        );
      }
}