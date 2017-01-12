import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MainComponent
    ],
    bootstrap: [MainComponent]
})
export class MainModule { }