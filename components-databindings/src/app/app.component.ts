import { Component } from '@angular/core';
import { Server } from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-poc-component-databind';

  servers: Server[] = [];

  OnServerBlueprintAdded(server: Server) {
    this.servers.push(new Server(server.name, server.content, server.type));
  }

  // OnBlueprintAdded(server: Server) {
  //   this.servers.push(server);
  // }

  OnFirstElementChange() {
    this.servers[0].name = 'rajesh';
  }

  OnFirstElementDelete() {
    this.servers.splice(0, 1);
  }

}
