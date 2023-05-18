import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './components/detalle.component';
import { ToStringPipe } from './pipes/toString.pipe';

@NgModule({
  declarations: [DetalleComponent, ToStringPipe],
  imports: [CommonModule],
  exports: [DetalleComponent],
})
export class DetalleModule {}
