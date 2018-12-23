import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlighterDirective } from './customdirectives/basic-highlighter/basic-highlighter.directive';
import { BetterHighlighterDirective } from './customdirectives/better-highlighter/better-highlighter.directive';
import { UnlessDirective } from './customdirectives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighterDirective,
    BetterHighlighterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
