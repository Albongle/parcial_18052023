import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/models/pais.model';
import { Producto } from 'src/app/models/producto.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  @Output() public eventNuevoProducto: EventEmitter<any>;
  protected frmAltaProducto: FormGroup;
  protected pais: Pais;
  protected producto: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly alertService: AlertService
  ) {
    this.eventNuevoProducto = new EventEmitter();
    this.frmAltaProducto = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      pais: ['', Validators.required],
    });
  }

  public handlerPais($event: Event) {
    this.pais = $event;
    this.frmAltaProducto.controls?.['pais'].setValue(this.pais);
  }

  public crearProducto() {
    if (this.frmAltaProducto.valid) {
      this.producto = new Producto({ ...this.frmAltaProducto.value });

      this.eventNuevoProducto.emit(this.producto);
      this.alertService.showAlert({
        icon: 'success',
        message: 'Producto creado con exito',
      });
    } else {
      this.alertService.showAlert({
        icon: 'error',
        message:
          'Debe completar el formulario y seleccionar un pais para el alta',
      });
    }
  }
}
