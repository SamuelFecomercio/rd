import { Routes } from '@angular/router';

import { LoginPage } from './pages/login.page/login.page.component';
import { HomePage } from './pages/home.page/home.page.component';

export const routes: Routes = [
    {path: '', component: LoginPage },
    {path: 'home', component: HomePage  },

];
