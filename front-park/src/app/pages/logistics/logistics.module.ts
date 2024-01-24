import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsRoutingModule } from './logistics-routing.module';
import { LogisticsComponent } from './logistics.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from 'src/app/share/client-list/client-list.component';
import { SharedComponentModule } from 'src/app/share/shared-component/shared-component.module';


@NgModule({
  declarations: [
    LogisticsComponent
  ],
  imports: [
    CommonModule,
    LogisticsRoutingModule,
    ReactiveFormsModule,
    SharedComponentModule
  ]
})
export class LogisticsModule { }
