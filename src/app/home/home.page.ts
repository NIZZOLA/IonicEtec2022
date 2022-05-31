import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  openPageClientes(){
    this.navCtrl.navigateForward('cliente/listagem');
 }

 openPageEmpreendimentos() {
  this.navCtrl.navigateForward('empreendimento/listagem');
 }

 openPageContas() {
  this.navCtrl.navigateForward('contas/listagem');
 }

}
