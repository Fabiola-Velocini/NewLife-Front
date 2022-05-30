import { MoradorService } from '../../service/morador.service';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Morador } from 'src/app/model/morador';

@Component({
  selector: 'app-retorno-moradores',
  templateUrl: './retorno-moradores.component.html',
  styleUrls: ['./retorno-moradores.component.scss']
})
export class RetornoMoradoresComponent implements OnInit {

  Id!: number
  displayedColumns = ['id_apartamento', 'nome', 'rg', 'cpf', 'telefone1', 'telefone2', 'email', 'contatoEmergencia', 'ceTelefone', 'observacao'];
  moradores$: Observable<Morador[]>;

  constructor(private moradorService: MoradorService) {
    this.moradores$ = this.moradorService.findMoradorById(this.Id);
  }

  ngOnInit(): void {
  }

}
