import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditMascotaComponent } from './components/add-edit-mascota/add-edit-mascota.component';
import { ListmascotasComponent } from './components/listmascotas/listmascotas.component';
import { ViewMascotasComponent } from './components/view-mascotas/view-mascotas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AddEditMascotaComponent,
    ListmascotasComponent,
    ViewMascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
