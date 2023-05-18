import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BienvenidaService {
  constructor(private readonly httpClient: HttpClient) {}

  public getDatos() {
    return this.httpClient.get('https://api.github.com/users/albongle');
  }
}
