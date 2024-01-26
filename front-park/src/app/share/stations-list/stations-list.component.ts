import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/pages/operators/models/station.interface';
import { StationService } from 'src/app/pages/operators/service/station.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {

estaciones!: Station[];

  constructor(private stationSvc: StationService) { }

  ngOnInit(): void {
    this.stationSvc.getTicket().subscribe((data: Station[]) => {
      this.estaciones = data;
    });
  }
  
  

}
