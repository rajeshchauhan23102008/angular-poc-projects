import { Component } from '@angular/core';
import { ServersService } from './_services/servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServersService]
})
export class AppComponent {
  title = 'routing';
}
