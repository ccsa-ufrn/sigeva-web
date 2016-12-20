import {
    Component,
    ElementRef,
    ViewChild,
    OnInit
} from '@angular/core';

@Component({
    selector: 'login',
    styleUrls: ['public/css/login.css'],
    templateUrl: 'public/templates/login.html'
})
export class LoginComponent implements OnInit{

    @ViewChild('mailInput') private mailInputElem: ElementRef;

    ngOnInit() {
        this.mailInputElem.nativeElement.focus();
    }

}
