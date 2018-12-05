import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`p { color: red}`]
})
export class AppComponent {
  title = 'does this really change';
  name = '';
}
