import { Component } from '@angular/core';
import { Container } from 'src/app/models/container.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  public containers: Container[];
  public container: Container;
  public handlerNewContainer($event: Event) {
    const container = $event as Container;

    this.containers.push(container);

    console.log(this.containers);
  }

  public handlerUpdateontainer($event: Event) {
    const container = $event as Container;
    const index = this.containers.findIndex(
      (c) => c.codigo === container.codigo
    );
    if (index > -1) {
      this.containers.splice(index, 1);
      this.containers.push(container);
    } else {
      this.containers.push(container);
    }

    console.log(this.containers);
  }
}
