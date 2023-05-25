import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaLibrosComponent } from './tabla-libros/tabla-libros.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';

const routes: Routes = [

  {path: 'tablalibros', component:TablaLibrosComponent,pathMatch:'full'},
  {path: 'ingresodatos', component:IngresoDatosComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
