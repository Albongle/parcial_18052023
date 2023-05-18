export class Container {
  public codigo?: string;
  public color?: string;
  public empresa?: string;
  public capacidad?: number;

  constructor(values: {
    codigo?: string;
    color?: string;
    empresa?: string;
    capacidad?: number;
  }) {
    this.codigo = values.codigo;
    this.color = values.color;
    this.empresa = values.empresa;
    this.capacidad = values.capacidad;
  }

  public toString(): string {
    return `${this.color}, ${this.codigo}`;
  }
}
