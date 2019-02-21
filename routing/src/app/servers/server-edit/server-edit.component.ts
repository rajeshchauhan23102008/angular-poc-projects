import { Component } from '@angular/core';
import { ServersService } from '../../_services/servers.service';

@Component({
    selector: 'app-server-edit',
    templateUrl: './server-edit.component.html'
})
export class ServerEditComponent {

    server: { name: string, status: string } = {
        name: '',
        status: ''
    };

    constructor(private serversService: ServersService) { }

    onServerStatusUpdate() {
        this.serversService.updateServerStatus(this.server.name, this.server.status);
    }
}
