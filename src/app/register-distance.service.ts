import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Distance {
    origin: string;
    destination: string;
    distance: number;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterDistanceService {
 
    constructor(
        private http: HttpClient
      ) {}

      postDistances(body: Distance) {
        return this.http.post<Distance>(
         'http://localhost:3000/distance',
          body,
          {responseType: 'json'}
        );
      }
}