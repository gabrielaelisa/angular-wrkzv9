import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface Distance {
    origin: string;
    destination: string;
    distance: number;
}

@Injectable()
export class RegisterDistanceService {
 
    constructor(
        private http: HttpClient
      ) {}

      postDistances() {
        return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
      }
}