import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected formLogin: FormGroup;
  constructor(
    private readonly alertService: AlertService,
    private readonly userService: UserService,

    private readonly formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['email1@mail.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required]],
    });
  }

  public login() {
    this.userService.login(
      this.formLogin.value['email'],
      this.formLogin.value['password']
    );
    if (this.userService.estaLogueado) {
      this.alertService.showAlert({ icon: 'success', message: 'Login ok' });
    } else {
      this.alertService.showAlert({ icon: 'error', message: 'Login No ok' });
    }
  }
}
