import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoModule } from '../listado/listado.module';
import { TablaPaisesModule } from '../tabla-paises/tabla-paises.module';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { DetalleModule } from '../detalle/detalle.module';

@NgModule({
  declarations: [ProductosComponent, ListadoProductosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    ListadoModule,
    TablaPaisesModule,
    DetalleModule,
  ],
})
export class ProductosModule {}
