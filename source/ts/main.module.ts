import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
    imports: [
        BrowserModule,
        MainRouting,
        AuthenticationModule
    ],
    declarations: [
        MainComponent
    ],
    bootstrap: [MainComponent]
})
export class MainModule { }
