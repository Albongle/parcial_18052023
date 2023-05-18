import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/models/container.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-actualizacion-container',
  templateUrl: './actualizacion-container.component.html',
  styleUrls: ['./actualizacion-container.component.scss'],
})
export class ActualizacionContainerComponent {
  @Output() public eventActualizaContainer: EventEmitter<any>;
  @Input() public containerRecibido: Container;
  protected frmModContainer: FormGroup;
  protected container: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly alertService: AlertService
  ) {
    this.eventActualizaContainer = new EventEmitter();
    this.frmModContainer = this.formBuilder.group({
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: ['', Validators.required],
    });
  }

  public actualizarContainer() {
    if (this.frmModContainer.valid) {
      this.containerRecibido = new Container({
        ...this.frmModContainer.value,
        codigo: this.containerRecibido.codigo,
      });
      this.eventActualizaContainer.emit(this.containerRecibido);
      this.alertService.showAlert({
        icon: 'success',
        message: 'container actualizado con exito',
      });
    } else {
      this.alertService.showAlert({
        icon: 'error',
        message: 'Debe completar el formulario para la actualizacion',
      });
    }
  }
}
