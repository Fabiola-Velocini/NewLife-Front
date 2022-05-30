import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { VisitantesComponent } from './visitantes/visitantes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CadastroComponent, children: [
    { path: 'moradores', component: MoradoresComponent },
    { path: 'veiculos', component: VeiculosComponent },
    { path: 'visitantes', component: VisitantesComponent },
    { path: 'funcionarios', component: FuncionariosComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
