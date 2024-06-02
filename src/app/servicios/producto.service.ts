import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as miUrl from '../utilidades/dominios/uris';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public apiProducto: string = miUrl.API_PRODUCTO;

  constructor(private http: HttpClient) { }

  public obtenerProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiProducto + '/all');
  }

  public crearProductos(objProduct: Producto): Observable<Producto> {
    const url = this.apiProducto + '/add';
    return this.http.post<Producto>(url, objProduct);
  }
  public buscarUnProducto(codProduct: string): Observable<Producto> {
    const url = this.apiProducto + '/one/'+codProduct;
    return this.http.get<Producto>(url);
  }
  public actualizarProductos(objProduct: Producto): Observable<Producto> {
    const url = this.apiProducto + '/updateinfo';
    return this.http.put<Producto>(url, objProduct);
  }
  public actualizarFoto(objProduct: Producto): Observable<Producto> {
    const url = this.apiProducto + '/updatephoto';
    return this.http.put<Producto>(url, objProduct);
  }
  
  public borrarPorducto(codProduct: string):Observable<Producto>{
    const url = this.apiProducto + '/delete/'+codProduct;
    return this.http.delete<Producto>(url);
  }
}
