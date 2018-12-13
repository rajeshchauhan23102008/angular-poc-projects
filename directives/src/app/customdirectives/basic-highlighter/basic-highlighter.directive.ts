import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlighter]'
}
)
export class BasicHighlighterDirective implements OnInit {

    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'blue';
    }

}