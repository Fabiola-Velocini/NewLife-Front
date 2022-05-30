import { FuncionarioService } from './../../service/funcionario.service';
import { Observable } from 'rxjs';
import { Funcionario } from './../../model/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retorno-funcionarios',
  templateUrl: './retorno-funcionarios.component.html',
  styleUrls: ['./retorno-funcionarios.component.scss']
})
export class RetornoFuncionariosComponent implements OnInit {

  Id!: number
  displayedColumns = ['id_apartamento', 'nome', 'rg', 'cpf', 'telefone1', 'telefone2', 'observacao'];
  funcionarios$: Observable<Funcionario[]>;

  constructor(private funcionarioService: FuncionarioService) {
    this.funcionarios$ = this.funcionarioService.findFuncionarioById(this.Id);
  }

  ngOnInit(): void {
  }

}
