import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  cancelar() {
    alert('Ação cancelada!');
  }
}
