import { RetornoFuncionariosComponent } from './retorno-funcionarios/retorno-funcionarios.component';
import { RetornoVisitantesComponent } from './retorno-visitantes/retorno-visitantes.component';
import { RetornoVeiculosComponent } from './retorno-veiculos/retorno-veiculos.component';
import { RetornoMoradoresComponent } from './retorno-moradores/retorno-moradores.component';
import { RetornoComponent } from './retorno/retorno.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PesquisaComponent, children: [
    { path: 'retorno', component: RetornoComponent},
    { path: 'moradores', component: RetornoMoradoresComponent },
    { path: 'veiculos', component: RetornoVeiculosComponent },
    { path: 'visitantes', component: RetornoVisitantesComponent },
    { path: 'funcionarios', component: RetornoFuncionariosComponent },
  ] },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
