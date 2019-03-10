import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from '../_services/servers.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})

export class ServersComponent implements OnInit {

    servers: {id: number, name: string, status: string}[] = [];

    constructor(private serversService: ServersService, private router: Router, private routes: ActivatedRoute) {

    }
    ngOnInit() {
        this.servers = this.serversService.getServers();
    }

    reloadServers() {
        // this.router.navigate(['servers']);

        //Correct Relative Path Navigation using Navigate Method.
        this.router.navigate(['servers'], { relativeTo: this.routes });
    }

}
