import {
    ElementRef,
    Renderer2,
    Directive,
    OnInit,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {
    constructor(private renderer: Renderer2, private element: ElementRef) { }

    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    @Input() defaultColor: string = 'transparent';
    //@Input() highlighterColor: string = 'yellow';
    @Input('appBetterHighlighter') highlighterColor: string = 'yellow';

    ngOnInit() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    }

    @HostListener('mouseover') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'orange');
        //this.backgroundColor = 'red';
        this.backgroundColor = this.highlighterColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        //this.backgroundColor = 'aqua';
        this.backgroundColor = this.defaultColor;
    }
}