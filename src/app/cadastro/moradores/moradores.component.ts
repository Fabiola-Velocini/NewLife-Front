import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MoradorService } from 'src/app/service/morador.service';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.scss']
})
export class MoradoresComponent implements OnInit {

  form: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private service: MoradorService
    ) {
    this.form = this.formBuilder.group({
      id_apartamento: [null],
      nome: [null],
      rg: [null],
      cpf: [null],
      telefone1: [null],
      telefone2: [null],
      email: [null],
      contatoEmergencia: [null],
      ceTelefone: [null],
      observacao: [null]
    });
  }

  ngOnInit(): void {
  }

  saveMorador() {
    const data = this.form.value;
    this.service.createMorador(data).subscribe( {
      next: () => {
        console.log("Sucesso");
      },
      error: error => {
        console.log("Erro");
      }
    });
  }

}
