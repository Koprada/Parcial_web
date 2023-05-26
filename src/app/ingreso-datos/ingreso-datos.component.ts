import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { Libro } from '../shared/libro';
import { TablaLibrosService } from '../tabla-libros.service';

@Component({
  selector: 'app-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css']
})
export class IngresoDatosComponent {
  nuevoLibro: Libro = new Libro();
  

}
