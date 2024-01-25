import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicityRoutingModule } from './publicity-routing.module';
import { PublicityComponent } from './publicity.component';
import { SharedComponentModule } from 'src/app/share/shared-component/shared-component.module';


@NgModule({
  declarations: [
    PublicityComponent
  ],
  imports: [
    CommonModule,
    PublicityRoutingModule,
    SharedComponentModule
  ]
})
export class PublicityModule { }
