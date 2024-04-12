import { Component } from '@angular/core';
//component
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-card.page',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './card.page.component.html',
  styleUrl: './card.page.component.css'
})
export class CardPageComponent {

}
