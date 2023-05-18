import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private readonly httpClient: HttpClient) {}

  public getPaises() {
    return this.httpClient
      .get('https://restcountries.com/v3.1/subregion/South America')
      .pipe(
        map((data: any) => {
          return Array.from(data).map((p: any) => {
            const pais = {
              nombre: p.name.common,
              bandera: p.flags.svg,
              capital: p.capital.shift(),
            };
            return pais;
          });
        })
      );
  }
}
