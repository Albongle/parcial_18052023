import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public estaLogueado: boolean;
  private static usuarios: Usuario[] = [
    { email: 'email1@mail.com', password: '12345', tipo: 'user' },
    { email: 'admin@mail.com', password: '12345', tipo: 'admin' },
  ];

  public login(email: string, password: string) {
    const resultado = UserService.usuarios.find(
      (u) => u.email === email && u.password === password
    );
    if (resultado) {
      this.estaLogueado = true;
      sessionStorage.setItem('usuarioActivo', JSON.stringify(resultado));
    } else {
      this.estaLogueado = false;
    }

    sessionStorage.setItem('estado', JSON.stringify(this.estaLogueado));
  }

  public estatusLogin() {
    const status = JSON.parse(sessionStorage.getItem('estado') as string);

    return status;
  }
  public usuarioActivo() {
    return JSON.parse(
      sessionStorage.getItem('usuarioActivo') as string
    ) as Usuario;
  }

  public logout() {
    this.estaLogueado = false;
    sessionStorage.setItem('estado', JSON.stringify(this.estaLogueado));
  }
}
