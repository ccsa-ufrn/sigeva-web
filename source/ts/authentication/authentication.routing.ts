import {
    ModuleWithProviders,
    NgModule
} from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AuthenticationRouting { }
