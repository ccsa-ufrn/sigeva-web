import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DashboardRouting
    ],
    declarations: [
        DashboardComponent
    ],
    bootstrap: []
})
export class DashboardModule { }
