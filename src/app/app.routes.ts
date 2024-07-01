import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path:'', redirectTo: 'dashboard', component: DashboardComponent },
    { path:'dashboard', component: DashboardComponent },
    { path:'user', component: UserComponent },
    { path:'/simplecrm/dashboard', component: DashboardComponent },
    { path:'/simplecrm/user', component: UserComponent },

];
