import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-status-card-cartao',
  standalone: true,
  imports: [],
  templateUrl: './status-card-cartao.component.html',
  styleUrl: './status-card-cartao.component.css'
})
export class StatusCardCartaoComponent {
  @Input() data: any;

  nome: string = 'João Marcos de Assis Oliveira Alves';
  cnpj: string   = '08.088.676/0001-90';
  acao: string = 'Venda de cartão';
  valor: string = '299,99';
}
