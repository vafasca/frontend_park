import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { ClientListComponent } from './share/client-list/client-list.component';
import { SharedComponentModule } from './share/shared-component/shared-component.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './share/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StationsListComponent } from './share/stations-list/stations-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedComponentModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
