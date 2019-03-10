import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../_services/servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    //server: { name: string, status: string } = { name : '', status: ''};

    server: { id: number, name: string, status: string } = null;

    constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        const serverId = +this.activatedRoute.snapshot.params['id'];
        this.server = this.serversService.getServer(serverId);

        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.server = this.serversService.getServer(+params['id']);
            }
        );

    }

    editServer() {
        this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
    }
}

