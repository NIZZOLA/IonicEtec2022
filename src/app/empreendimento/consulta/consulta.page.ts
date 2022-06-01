import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpreendimentoService } from 'src/services/empreendimento.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  id: any;
  empreendimento: any = [];

  constructor(private empreendimentoService: EmpreendimentoService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('acesso a tela consulta');
        this.id = this.router.getCurrentNavigation().extras.state.empreendimentoId
        this.CarregaEmpreendimento(this.id);
      }
    });
  }

  ngOnInit() {
  }

  TrataData(stringDate) {
    if(stringDate) {
       var dataArray =  stringDate.substring(0,10).split("-");
       return dataArray[2]+"/"+dataArray[1]+"/"+dataArray[0];
    }
    return stringDate;
  }

  CarregaEmpreendimento(idEmpreendimento) {
    this.empreendimentoService.getEmpreendimento(idEmpreendimento)
      .then((json) => {

        this.empreendimento = json;
        this.empreendimento.dataOrcamento = this.TrataData( this.empreendimento.dataOrcamento);
        this.empreendimento.dataInicio = this.TrataData(this.empreendimento.dataInicio);
        this.empreendimento.dataTermino = this.TrataData(this.empreendimento.dataTermino);
        this.empreendimento.dataPrevistaTermino = this.TrataData(this.empreendimento.dataPrevistaTermino);
        console.log(this.empreendimento);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}
