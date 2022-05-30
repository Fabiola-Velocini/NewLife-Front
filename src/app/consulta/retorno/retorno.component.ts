import { ApartamentoService } from './../../service/apartamento.service';
import { Apartamento } from './../../model/apartamento';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-retorno',
  templateUrl: './retorno.component.html',
  styleUrls: ['./retorno.component.scss']
})
export class RetornoComponent implements OnInit {

  apartamentos$: Observable<Apartamento[]>;
  displayedColumns = ['id_apartamento', 'acao'];

  constructor(private apartamentoService: ApartamentoService) {
    this.apartamentos$ = this.apartamentoService.findAll();
  }

  ngOnInit(): void {

  }

}
