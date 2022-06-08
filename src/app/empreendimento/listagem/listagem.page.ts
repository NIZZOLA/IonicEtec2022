import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/apiservice.service';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  resultado : any = [];
  
  constructor(private empreendService: ApiService, 
              private navCtrl: NavController) {
                  this.CarregaDados();
                 }

  ngOnInit() {
  }


  CarregaDados() {
    this.empreendService.getEmpreendimentos()
      .then((json) => {
        console.log(json);
        this.resultado = json;
      })
      .catch((erro) => {
        console.log("Erro ao carregar a requisição" + erro);
      });
  }

  openPageEmpreendimentos(idEmpreendimento: number){
    
     let navExtras: NavigationExtras = {
       state: { empreendimentoId: idEmpreendimento }
     }
     this.navCtrl.navigateForward('empreendimento/consulta', navExtras);
  }
 
  openPageContas(idEmpreendimento: number) {
     let navExtras: NavigationExtras = {
      state: { empreendimentoId: idEmpreendimento }
     }
     this.navCtrl.navigateForward('conta/listagem', navExtras);
  }
}
