import {
    Component,
    Input,
    ViewEncapsulation,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    SimpleChanges,
    ViewChild,
    ElementRef,
    ContentChild
} from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    @Input('srvElement') server: Server;
    @Input() name: string;
    @ViewChild('heading') header: ElementRef;
    @ContentChild('serverContent') contentServer: ElementRef;

    constructor() {
        console.log('Constructor Called!!!');
    }

    ngOnInit() {
        console.log('ngOnInit Called!!!');
        console.log('Heading value ' + this.header.nativeElement.textContent);
        console.log('server Content - ' + this.contentServer.nativeElement.textContent);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges Called!!!');
        console.log(changes);
    }

    ngDoCheck() {
        console.log('ngDoCheck hook called!!!');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit hook called!!!');
        console.log('Heading value ' + this.header.nativeElement.textContent);
        console.log('server Content - ' + this.contentServer.nativeElement.textContent);
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked hook called!!!');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit hook called!!!');
        console.log('ngAfterViewInit - Heading value ' + this.header.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked hook called!!!');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy hook called!!!');
    }
}
