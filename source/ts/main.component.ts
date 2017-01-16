import { Component } from '@angular/core';
import { Config } from './config';

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`
    // templateUrl: `${Config.hostViews}/main.html`
})
export class MainComponent { }
