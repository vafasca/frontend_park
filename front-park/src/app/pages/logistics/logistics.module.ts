import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsRoutingModule } from './logistics-routing.module';
import { LogisticsComponent } from './logistics.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from 'src/app/share/client-list/client-list.component';


@NgModule({
  declarations: [
    LogisticsComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    LogisticsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogisticsModule { }
