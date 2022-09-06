import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  clienteUrl = "http://localhost:3000/clientes/";
  empreendUrl = "http://localhost:3000/empreendimentos/";
  contaUrl = "http://localhost:3000/contas/";
  constructor(private http: HttpClient) {
  }

  getContas(id : string) {
    return this.http.get(this.contaUrl).toPromise();
  }

  getConta(id) {
    return this.http.get(this.contaUrl + id).toPromise();
  }

  getClientes() {
    return this.http.get(this.clienteUrl).toPromise();
  }

  getCliente(id) {
    return this.http.get(this.clienteUrl + id).toPromise();
  }

  getEmpreendimentos() {
    return this.http.get(this.empreendUrl).toPromise();
  }

  getEmpreendimento(id) {
    return this.http.get(this.empreendUrl + id).toPromise();
  }
}
