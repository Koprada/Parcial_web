import { Injectable } from '@angular/core';
import { Libro } from './shared/libro';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';
import { AppModule } from './app.module';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TablaLibrosService {

  constructor(private http: HttpClient) { }

  crearlibro(libros : Libro) : Observable<any>{
    return this.http.post(`${environment.backendAPI}/libros/create`, libros); 
  }
  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${environment.backendAPI}/libros/get`);
  }
}
