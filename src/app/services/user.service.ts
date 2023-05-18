import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public estaLogueado: boolean;
  private static usuarios: any[] = [
    { email: 'email1@mail.com', password: '12345' },
    { email: 'email2@mail.com', password: '12345' },
  ];

  public login(email: string, password: string) {
    const resultado = UserService.usuarios.find(
      (u) => u.email === email && u.password === password
    );
    if (resultado) {
      this.estaLogueado = true;
    } else {
      this.estaLogueado = false;
    }

    sessionStorage.setItem('estado', JSON.stringify(this.estaLogueado));
  }

  public estatusLogin() {
    const status = JSON.parse(sessionStorage.getItem('estado') as string);

    return status;
  }

  public logout() {
    this.estaLogueado = false;
    sessionStorage.setItem('estado', JSON.stringify(this.estaLogueado));
  }
}
