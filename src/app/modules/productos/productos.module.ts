import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoModule } from '../listado/listado.module';
import { TablaPaisesModule } from '../tabla-paises/tabla-paises.module';

@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    ListadoModule,
    TablaPaisesModule,
  ],
})
export class ProductosModule {}
