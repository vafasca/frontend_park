import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {

  estaciones = [
    {
      nombre: 'Estacion 1',
      atracciones: [
        {
          nombre: 'Atraccion 1',
          maquina: 'Maquina 1'
        },
        {
          nombre: 'Atraccion 2',
          maquina: 'Maquina 2'
        }
      ]
    },
    {
      nombre: 'Estacion 2',
      atracciones: [
        {
          nombre: 'Atraccion 3',
          maquina: 'Maquina 3'
        },
        {
          nombre: 'Atraccion 4',
          maquina: 'Maquina 4'
        }
      ]
    },
    // Más estaciones...
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
