import { Component } from '@angular/core';
import { Config } from './config';

@Component({
    selector: 'app',
    templateUrl: `${Config.hostViews}/main.html`
})
export class MainComponent { }
