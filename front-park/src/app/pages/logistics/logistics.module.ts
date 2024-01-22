import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsRoutingModule } from './logistics-routing.module';
import { LogisticsComponent } from './logistics.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogisticsComponent
  ],
  imports: [
    CommonModule,
    LogisticsRoutingModule,
    FormsModule
  ]
})
export class LogisticsModule { }
