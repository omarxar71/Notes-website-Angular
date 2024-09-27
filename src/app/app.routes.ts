import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent}, 
    {path: "register", component: RegisterComponent}, 
    {path: "home", component: HomeComponent}, 
    {path: "", component: NotfoundComponent}, 
];
