import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicityComponent } from './publicity.component';

const routes: Routes = [{ path: '', component: PublicityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicityRoutingModule { }
