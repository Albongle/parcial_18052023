import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  @Input() public listaDeElementos: Array<any>;
  @Input() public habilitarDetalle: boolean | undefined;
  @Input() public nombreDetalle: string | undefined;
  @Output() public eventEnviarElemento: EventEmitter<any>;

  constructor() {
    this.eventEnviarElemento = new EventEmitter();
  }

  public seleccionarItem(item: any) {
    this.eventEnviarElemento.emit(item);
  }
}
