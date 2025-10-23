import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { LoginComponent } from './login/login';

export const routes: Routes = [
      { path: '', component: Home },
        { path: 'login', component: LoginComponent },

];
