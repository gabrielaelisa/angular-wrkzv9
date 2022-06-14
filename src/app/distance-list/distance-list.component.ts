import { Component, OnInit } from '@angular/core';
import { DistanceListService, Distance } from '../distance-list.service';

@Component({
  selector: 'app-distance-list',
  templateUrl: './distance-list.component.html',
  styleUrls: ['./distance-list.component.css']
})
export class DistanceListComponent implements OnInit {

  distances: Distance[] = [];


  constructor (private distanceListService: DistanceListService ) { 
  }

  ngOnInit(): void {
    this.showConfig();
    this.heartBeat();
    
  }

  share() {
    window.alert('The distance has been shared!');
  }

  showConfig(): void {
    this.distanceListService.getDistances()
    .subscribe(distances => this.distances = distances.message);
  }

  heartBeat(): void {
    this.distanceListService.getHeartbeat()
    .subscribe(heartbeat=> console.log(heartbeat));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/