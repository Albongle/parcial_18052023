import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ToString',
})
export class ToStringPipe implements PipeTransform {
  transform(value: any): string | undefined {
    if (value?.capital) {
      return `${value?.nombre} - ${value?.capital}`;
    }
    return `${value?.nombre}, ${value?.apellido}`;
  }
}
