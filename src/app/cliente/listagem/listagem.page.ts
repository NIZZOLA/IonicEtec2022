import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  openPageClientes(idCliente: number){
    this.navCtrl.navigateForward('cliente/consulta');
 }

 openPageEmpreendimentos(idCliente: number) {
    this.navCtrl.navigateForward('empreendimento/listagem')
 }
}
