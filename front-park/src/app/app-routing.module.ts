import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path: 'logistics', loadChildren: () => import('./pages/logistics/logistics.module').then(m => m.LogisticsModule) },
  { path: 'publicity', loadChildren: () => import('./pages/publicity/publicity.module').then(m => m.PublicityModule) },
  { path: 'operators', loadChildren: () => import('./pages/operators/operators.module').then(m => m.OperatorsModule) },
  { path: 'administrator', loadChildren: () => import('./pages/administrator/administrator.module').then(m => m.AdministratorModule) },
  { path: 'maintenance', loadChildren: () => import('./pages/maintenance/maintenance.module').then(m => m.MaintenanceModule) },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
