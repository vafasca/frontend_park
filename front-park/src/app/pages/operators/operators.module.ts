import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { SharedComponentModule } from 'src/app/share/shared-component/shared-component.module';


@NgModule({
  declarations: [
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    SharedComponentModule
  ]
})
export class OperatorsModule { }
