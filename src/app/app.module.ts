import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaLibrosComponent } from './tabla-libros/tabla-libros.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaLibrosComponent,
    IngresoDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
