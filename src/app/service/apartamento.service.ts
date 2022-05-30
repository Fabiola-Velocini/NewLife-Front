import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Apartamento } from './../model/apartamento';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApartamentoService {

  private readonly API = '/api/apartamentos'

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Apartamento[]>(this.API)
    .pipe(
      first()
    );
  }

}
