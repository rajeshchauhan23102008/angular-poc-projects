import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directives';

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  oddNumber: boolean = true;
  numberText: string;

  @ViewChild('numberTogglerButton') numberTogglerButton: ElementRef;

  ngOnInit() {
    this.numberText = this.oddNumber ? 'Even Numbers' : 'Odd Numbers';
  }

  numberToggler() {
    this.oddNumber = !this.oddNumber;
    this.numberText = this.oddNumber ? 'Even Numbers' : 'Odd Numbers';
  }

}
