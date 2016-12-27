import { 
    Component, 
    ViewChild,
    ElementRef,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['public/css/home.css'],
    templateUrl: 'public/templates/home.html'
})
export class HomeComponent implements OnInit { 

    @ViewChild('searchEventInput') searchEventInput: ElementRef;

    ngOnInit() {
        this.searchEventInput.nativeElement.focus();
    }    

}
