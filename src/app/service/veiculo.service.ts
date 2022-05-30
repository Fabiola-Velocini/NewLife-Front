import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private httpClient: HttpClient) { }

  findVeiculoById(id: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/veiculos/${id}`);
  }

  createVeiculo(formData: Object) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/veiculos/`, formData);
  }

  updateVeiculo(formData: Object, id: number) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/veiculos/${id}`, formData);
  }

  deleteVeiculo(id: number) {
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/veiculos/${id}`);
  }

}
