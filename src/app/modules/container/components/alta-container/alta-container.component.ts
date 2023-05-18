import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/models/container.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.scss'],
})
export class AltaContainerComponent {
  @Output() public eventNuevoContainer: EventEmitter<any>;
  protected frmAltaContainer: FormGroup;
  protected container: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly alertService: AlertService
  ) {
    this.eventNuevoContainer = new EventEmitter();
    this.frmAltaContainer = this.formBuilder.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: ['', Validators.required],
    });
  }

  public crearContainer() {
    if (this.frmAltaContainer.valid) {
      this.container = new Container({ ...this.frmAltaContainer.value });
      this.eventNuevoContainer.emit(this.container);
      this.alertService.showAlert({
        icon: 'success',
        message: 'container creado con exito',
      });
    } else {
      this.alertService.showAlert({
        icon: 'error',
        message: 'Debe completar el formulario para el alta',
      });
    }
  }
}
