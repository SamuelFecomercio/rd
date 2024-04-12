import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-status-card',
  standalone: true,
  imports: [],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.css'
})
export class StatusCardComponent {
  @Input() data: any;

  empresa: string = 'Padaria Jambroba refeições ltda';
  cnpj: string   = '08.088.676/0001-90';
  acao: string = 'Parceria';
  valor: string = '';
}
