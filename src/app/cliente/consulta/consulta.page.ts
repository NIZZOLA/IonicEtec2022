import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteFornecedorModel } from 'src/app/model/clienteFornecedorModel';
import { ApiService } from '../../services/apiservice.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  id : any;
  cliente: any = []; //ClienteFornecedorModel;

  constructor(private clientService: ApiService,
              private route: ActivatedRoute, 
              private router: Router) 
    {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {

        this.id = this.router.getCurrentNavigation().extras.state.clienteId;
        this.CarregaCliente(this.id);
         
      }
    });
   }

  ngOnInit() {
  }

  CarregaCliente(idcliente) {
    this.clientService.getCliente(idcliente)
      .then((json) => {
        
        this.cliente = json;
        console.log(this.cliente);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}
