import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticationRouting } from './authentication.routing';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AuthenticationRouting
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: []
})
export class AuthenticationModule { }
