import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss'],
})
export class ListadoProductosComponent {
  public productoElegido: any;
  constructor(protected productoService: ProductoService) {}

  public handlerDetalleItem($event: any) {
    this.productoElegido = $event;
  }
}
