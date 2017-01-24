import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: '404',
                component: MainComponent
            },
            {
                path: '**',
                redirectTo: '404'
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRouting { }
