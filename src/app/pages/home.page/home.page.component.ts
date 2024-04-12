import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StatusBoardComponent } from '../../components/home/status-board/status-board.component';
import { StatusCardComponent } from '../../components/home/status-card/status-card.component';


@Component({
  selector: 'app-home.page',
  standalone: true,
  imports: [
    HeaderComponent,
    StatusBoardComponent,
    StatusCardComponent
  ],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.css'
})
export class HomePage {

  usuario: string = "Samuel"

    leadsData = [
    { type: 'normal', data: 'Dados do lead 1' },
    { type: 'cartao', data: 'Dados do cartão 1' },
  ];

}

