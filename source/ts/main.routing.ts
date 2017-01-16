import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
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
