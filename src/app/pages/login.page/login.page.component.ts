import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { CardLoginComponent } from '../../components/login/card-login/card-login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CardLoginComponent,
  ],
  templateUrl: './login.page.component.html',
  styleUrl: './login.page.Component.css'
})
export class LoginPage {

}
