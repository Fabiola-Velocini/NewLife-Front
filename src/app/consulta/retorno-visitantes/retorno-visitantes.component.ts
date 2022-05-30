import { VisitanteService } from './../../service/visitante.service';
import { Visitante } from './../../model/visitante';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retorno-visitantes',
  templateUrl: './retorno-visitantes.component.html',
  styleUrls: ['./retorno-visitantes.component.scss']
})
export class RetornoVisitantesComponent implements OnInit {

  Id!: number
  displayedColumns = ['id_apartamento', 'nome', 'rg', 'cpf', 'telefone1', 'telefone2', 'observacao'];
  visitantes$: Observable<Visitante[]>;

  constructor(private visitanteService: VisitanteService) {
    this.visitantes$ = this.visitanteService.findVisitanteById(this.Id);
  }

  ngOnInit(): void {
  }

}
