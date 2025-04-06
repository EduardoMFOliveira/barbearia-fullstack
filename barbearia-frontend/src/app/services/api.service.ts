import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Clientes
  criarCliente(cliente: any) {
    return this.http.post(`${this.API_URL}/clientes`, cliente);
  }

  // Agendamentos
  listarAgendamentos(data: string) {
    return this.http.get(`${this.API_URL}/agendamentos?data=${data}`);
  }
}