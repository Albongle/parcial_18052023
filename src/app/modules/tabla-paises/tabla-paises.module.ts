import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from './components/tabla-paises.component';
import { ListadoModule } from '../listado/listado.module';

@NgModule({
  declarations: [TablaPaisesComponent],
  imports: [CommonModule, ListadoModule],
  exports: [TablaPaisesComponent],
})
export class TablaPaisesModule {}
