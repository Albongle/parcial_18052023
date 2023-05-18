import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-listado-publico',
  templateUrl: './productos-listado-publico.component.html',
  styleUrls: ['./productos-listado-publico.component.scss'],
})
export class ProductosListadoPublicoComponent {
  handlerDetalleItem($event: any) {
    throw new Error('Method not implemented.');
  }
  constructor(protected productoService: ProductoService) {}

  protected productosMayorStock() {
    return this.productoService
      .getProdcutos()
      .filter((p: Producto) => p.stock! > 0);
  }
}
