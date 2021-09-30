import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {

  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adcionar(transferencia: Transferencia) {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}


