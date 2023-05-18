import { Component } from '@angular/core';
import { BienvenidaService } from '../../services/bienvenida.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
})
export class BienvenidaComponent {
  public usuario: any;
  constructor(private readonly bienvenidaService: BienvenidaService) {
    this.bienvenidaService
      .getDatos()
      .subscribe((data) => (this.usuario = data));
  }
}
