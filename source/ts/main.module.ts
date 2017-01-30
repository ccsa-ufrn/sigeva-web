import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        BrowserModule,
        MainRouting
    ],
    declarations: [
        MainComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: [MainComponent]
})
export class MainModule { }
