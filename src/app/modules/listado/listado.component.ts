import { Component, EventEmitter, Input, Output } from '@angular/core';

enum ModoVista {
  TABLA = 'tabla',
  LISTA = 'lista',
}
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
  @Input() public listaDeElementos: Array<any>;
  @Input() public config: {
    habilitarAlternarVista?: boolean;
    habilitarDetalle?: boolean;
    verComo?: 'tabla' | 'lista';
    nombreDetalle?: string;
  };
  @Output() public eventEnviarElemento: EventEmitter<any>;
  protected alternarVista: boolean;
  protected siguienteVista: ModoVista;
  private static modosVista = [ModoVista.TABLA, ModoVista.LISTA];

  constructor() {
    this.eventEnviarElemento = new EventEmitter();
  }
  ngOnInit() {
    this.siguienteVista =
      this.config && this.config.verComo === 'lista'
        ? ModoVista.TABLA
        : ModoVista.LISTA;
    this.alternarVista = this.config && this.config.verComo === 'lista';
  }

  public cambiarVista() {
    this.alternarVista = !this.alternarVista;

    this.siguienteVista =
      ListadoComponent.modosVista[
        (ListadoComponent.modosVista.indexOf(this.siguienteVista) + 1) %
          ListadoComponent.modosVista.length
      ];
  }

  public seleccionarItem(item: any) {
    this.eventEnviarElemento.emit(item);
  }
}
