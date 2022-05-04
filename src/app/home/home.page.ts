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
   console.log('clicou empreendimentos');
 }

 openPageContas() {
  console.log('clicou contas');
 }

}
