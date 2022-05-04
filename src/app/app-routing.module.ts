import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cliente/consulta',
    loadChildren: () => import('./cliente/consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'cliente/listagem',
    loadChildren: () => import('./cliente/listagem/listagem.module').then( m => m.ListagemPageModule)
  },
  {
    path: 'empreendimento/listagem',
    loadChildren: () => import('./empreendimento/listagem/listagem.module').then( m => m.ListagemPageModule)
  },
  {
    path: 'empreendimento/consulta',
    loadChildren: () => import('./empreendimento/consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'conta/listagem',
    loadChildren: () => import('./conta/listagem/listagem.module').then( m => m.ListagemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
