import { Pais } from './pais.model';

export class Producto {
  public codigo?: string;
  public descripcion?: string;
  public precio?: number;
  public stock?: number;
  public pais?: Pais;
  constructor(values: {
    codigo?: string;
    descripcion?: string;
    precio?: number;
    stock?: number;
    pais?: Pais;
  }) {
    this.codigo = values.codigo;
    this.descripcion = values.descripcion;
    this.precio = values.precio;
    this.stock = values.stock;
    this.pais = values.pais;
  }

  public toString(): string {
    return `${this.descripcion}, ${this.codigo}`;
  }
}
