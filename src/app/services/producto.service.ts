import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  public guardarProdcuto(producto: Producto) {
    const productos =
      JSON.parse(sessionStorage.getItem('productos') as string) ?? [];
    productos.push(producto);
    sessionStorage.setItem('productos', JSON.stringify(productos));
  }

  public getProdcutos(): Producto[] {
    return (
      JSON.parse(sessionStorage.getItem('productos') as string) ??
      ([] as Producto[])
    );
  }
}
