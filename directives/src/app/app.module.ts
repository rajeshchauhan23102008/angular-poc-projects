import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlighterDirective } from './customdirectives/basic-highlighter/basic-highlighter.directive';
import { BetterHighlighterDirective } from './customdirectives/better-highlighter/better-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighterDirective,
    BetterHighlighterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
