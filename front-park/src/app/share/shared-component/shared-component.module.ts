import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from '../client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { StationsListComponent } from '../stations-list/stations-list.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ClientListComponent,
    StationsListComponent // Agrega StationsListComponent a las declaraciones
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule
  ],
  exports: [
    ClientListComponent,
    StationsListComponent // Asegúrate de exportar también StationsListComponent
  ]
})
export class SharedComponentModule { }
