import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'listado', component: ListadoProductosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
