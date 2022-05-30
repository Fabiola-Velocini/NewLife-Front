import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  constructor(private httpClient: HttpClient) { }

  findMoradorById(id: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/moradores/${id}`);
  }

  createMorador(formData: Object) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/moradores/`, formData);
  }

  updateMorador(formData: Object, id: number) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/moradores/${id}`, formData);
  }

  deleteMorador(id: number) {
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/moradores/${id}`);
  }

}
