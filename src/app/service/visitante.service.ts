import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private httpClient: HttpClient) { }

  findVisitanteById(id: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/visitantes/${id}`);
  }

  createVisitante(formData: Object) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/visitantes/`, formData);
  }

  updateVisitante(formData: Object, id: number) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/visitantes/${id}`, formData);
  }

  deleteVisitante(id: number) {
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/visitantes/${id}`);
  }

}
