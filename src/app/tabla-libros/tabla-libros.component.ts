import { Component } from '@angular/core';
import { Libro } from '../shared/libro';
import { TablaLibrosService } from '../tabla-libros.service';

@Component({
  selector: 'app-tabla-libros',
  templateUrl: './tabla-libros.component.html',
  styleUrls: ['./tabla-libros.component.css']
})
export class TablaLibrosComponent {
  libros: Libro[] = [];
  constructor(private tablaLibrosServices:TablaLibrosService){}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.tablaLibrosServices.obtenerLibros().subscribe(libros => {
      this.libros = libros;
    });
  }

}
