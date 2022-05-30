import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private httpClient: HttpClient) { }

  findFuncionarioById(id: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/funcionarios/${id}`);
  }

  createFuncionario(formData: Object) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/funcionarios/`, formData);
  }

  updateFuncionario(formData: Object, id: number) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/funcionarios/${id}`, formData);
  }

  deleteFuncionario(id: number) {
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/funcionarios/${id}`);
  }

}
