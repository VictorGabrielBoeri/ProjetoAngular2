import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:4000/pensamentos'
  constructor(private http: HttpClient) { }

  listar() {

  }
}
