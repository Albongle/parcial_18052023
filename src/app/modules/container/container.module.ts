import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { AltaContainerComponent } from './components/alta-container/alta-container.component';
import { ActualizacionContainerComponent } from './components/actualizacion-container/actualizacion-container.component';
import { BorrarContainerComponent } from './components/borrar-container/borrar-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoModule } from '../listado/listado.module';
import { DetalleModule } from '../detalle/detalle.module';

@NgModule({
  declarations: [
    ContainerComponent,
    AltaContainerComponent,
    ActualizacionContainerComponent,
    BorrarContainerComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ReactiveFormsModule,
    ListadoModule,
    DetalleModule,
  ],
})
export class ContainerModule {}
