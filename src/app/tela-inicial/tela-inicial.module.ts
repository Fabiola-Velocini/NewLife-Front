import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';


@NgModule({
  declarations: [
    TelaInicialComponent
  ],
  imports: [
    CommonModule,
    TelaInicialRoutingModule,
    AppMaterialModule
  ]
})
export class TelaInicialModule { }
