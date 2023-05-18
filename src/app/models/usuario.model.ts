export class Usuario {
  public email?: string;
  public password?: string;
  public tipo?: 'user' | 'admin';

  constructor(value: {
    email?: string;
    password?: string;
    tipo?: 'user' | 'admin';
  }) {
    this.email = value.email;
    this.password = value.password;
    this.tipo = value.tipo;
  }
}
