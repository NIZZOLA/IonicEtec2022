import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = "http://localhost:3000/clientes/";
  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(this.url).toPromise();
  }

  getCliente(id) {
    return this.http.get(this.url + id).toPromise();
  }
}
