import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ClienteService } from 'src/services/cliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  resultado : any = [];
  constructor(private clientService: ClienteService, private navCtrl: NavController) {
    this.CarregaDados();
   }

  ngOnInit() {
  }

  CarregaDados() {
    this.clientService.getClientes()
      .then((json) => {
        console.log(json);
        this.resultado = json;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  openPageClientes(idCliente: number){
   // console.log("Entrou:" + idCliente);
    let navExtras: NavigationExtras = {
      state: { clienteId: idCliente }
    }
    this.navCtrl.navigateForward('cliente/consulta', navExtras);
 }

 openPageEmpreendimentos(idCliente: number) {
    this.navCtrl.navigateForward('empreendimento/listagem')
 }
}
