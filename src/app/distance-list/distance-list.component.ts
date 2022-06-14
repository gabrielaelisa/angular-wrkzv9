import { Component, OnInit } from '@angular/core';
import { DistanceListService, Distance } from '../distance-list.service';

@Component({
  selector: 'app-distance-list',
  templateUrl: './distance-list.component.html',
  styleUrls: ['./distance-list.component.css']
})
export class DistanceListComponent implements OnInit {

  distances: Distance[] = [];
  theHeartBeat: string = '';
  currentPageNumber: number = 1;


  constructor (private distanceListService: DistanceListService ) { 
  }

  ngOnInit(): void {
    this.showConfig();
    this.heartBeat();
    
  }

  getNextPage() {
    this.currentPageNumber +=1;
    this.showConfig();
   
  }

  getPreviousPage() {
    this.currentPageNumber -=1;
    if(this.currentPageNumber==0){
      this.currentPageNumber= 1;
    }
    this.showConfig();
   
  }

  showConfig(): void {
    this.distanceListService.getDistances( this.currentPageNumber )
      .subscribe(distances => this.distances = distances.message);
  }

  
  heartBeat(): void {
    this.distanceListService.getHeartbeat()
    .subscribe(heartBeat=> this.theHeartBeat =heartBeat.message);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/