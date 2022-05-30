import { VeiculoService } from './../../service/veiculo.service';
import { Veiculo } from './../../model/veiculo';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retorno-veiculos',
  templateUrl: './retorno-veiculos.component.html',
  styleUrls: ['./retorno-veiculos.component.scss']
})
export class RetornoVeiculosComponent implements OnInit {

  Id!: number
  displayedColumns = ['id_apartamento', 'placa', 'marca', 'modelo', 'cor'];
  veiculos$: Observable<Veiculo[]>;

  constructor(private veiculoService: VeiculoService) {
    this.veiculos$ = this.veiculoService.findVeiculoById(this.Id);
  }

  ngOnInit(): void {
  }

}
