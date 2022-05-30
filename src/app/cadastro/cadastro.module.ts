import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VisitantesComponent } from './visitantes/visitantes.component';

@NgModule({
  declarations: [
    MoradoresComponent,
    VeiculosComponent,
    VisitantesComponent,
    FuncionariosComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class CadastroModule { }
