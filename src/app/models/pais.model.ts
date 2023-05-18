export class Pais {
  public nombre?: string;
  public bandera?: string;
  public capital?: string;

  public toString(): string {
    return `Pais:${this.nombre}\nCiudad:${this.capital}`;
  }
}
