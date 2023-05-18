import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosListadoPublicoComponent } from './components/productos-listado-publico/productos-listado-publico.component';
import { ListadoModule } from './modules/listado/listado.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductosListadoPublicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ListadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
