import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { RetornoComponent } from './retorno/retorno.component';
import { RetornoMoradoresComponent } from './retorno-moradores/retorno-moradores.component';
import { RetornoVeiculosComponent } from './retorno-veiculos/retorno-veiculos.component';
import { RetornoVisitantesComponent } from './retorno-visitantes/retorno-visitantes.component';
import { RetornoFuncionariosComponent } from './retorno-funcionarios/retorno-funcionarios.component';


@NgModule({
  declarations: [
    PesquisaComponent,
    RetornoComponent,
    RetornoMoradoresComponent,
    RetornoVeiculosComponent,
    RetornoVisitantesComponent,
    RetornoFuncionariosComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    AppMaterialModule
  ]
})
export class ConsultaModule { }
