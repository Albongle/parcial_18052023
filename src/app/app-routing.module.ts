import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/login.guard';
import { ProductosListadoPublicoComponent } from './components/productos-listado-publico/productos-listado-publico.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'bienvenida',
    loadChildren: () =>
      import('./modules/bienvenida/bienvenida.module').then(
        (m) => m.BienvenidaModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./modules/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'listadoPublico',
    component: ProductosListadoPublicoComponent,
  },
  {
    path: 'container',
    loadChildren: () =>
      import('./modules/container/container.module').then(
        (m) => m.ContainerModule
      ),
    canActivate: [AuthGuard, AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
