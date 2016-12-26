import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthorizationModule } from './authorization/authorization.module';
import { ExternalComponent } from './external.component';
import { HomeComponent } from './home.component';
import Routes from './routes';

@NgModule({
    imports: [
        BrowserModule,
        AuthorizationModule,
        RouterModule.forRoot(Routes)
    ],
    declarations: [
        ExternalComponent,
        HomeComponent
    ],
    bootstrap: [ExternalComponent]
})
export class ExternalModule { }