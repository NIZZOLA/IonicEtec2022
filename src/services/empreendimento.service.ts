import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpreendimentoService {
  url = "http://localhost:3000/empreendimentos/";
  constructor(private http: HttpClient) { }

  getEmpreendimentos() {
    return this.http.get(this.url).toPromise();
  }

  getEmpreendimento(id) {
    return this.http.get(this.url + id).toPromise();
  }
}
