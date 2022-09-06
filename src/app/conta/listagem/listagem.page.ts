import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/apiservice.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  resultado : any = [];
  id: any;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) {
      console.log("Construindo");
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          console.log('acesso a tela consulta');
          this.id = this.router.getCurrentNavigation().extras.state.empreendimentoId
          console.log("Id obtido:" + this.id);
          this.CarregaDados(this.id);
        }
      });
     }

  ngOnInit() {
  }

  CarregaDados(id: string) {
    this.apiService.getContas(id)
      .then((json) => {
        console.log(json);
        this.resultado = json;
      })
      .catch((erro) => {
        console.log("Erro ao carregar a requisição" + erro);
      });
  }

  openEditar( id:string )
  {
      console.log("OpenEditar "+id);
  }

  openDetalhes(id :string )
  {
      console.log("OpenDetalhes " + id);
  }
}