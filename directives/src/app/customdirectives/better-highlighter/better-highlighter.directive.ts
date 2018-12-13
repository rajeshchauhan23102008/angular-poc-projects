import { ElementRef, Renderer2, Directive, OnInit } from '@angular/core';

@Directive({
    selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {
    constructor(private renderer: Renderer2, private element: ElementRef) { }

    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'orange');
    }
}