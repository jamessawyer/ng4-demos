import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const ROUTE_CONFIG: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, data: { state: 'home' } },
    { path: 'about', component: AboutComponent, data: { state: 'about' } }
]

export const AppRouting = RouterModule.forRoot(ROUTE_CONFIG);
