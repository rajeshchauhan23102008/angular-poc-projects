import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../_services/servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    //server: { name: string, status: string } = { name : '', status: ''};

    server: { id: number, name: string, status: string } = null;

    constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        // const serverId = +this.activatedRoute.snapshot.params['id'];
        //const serverId = +this.activatedRoute.snapshot.data['serverid'];

        //this.server = this.serversService.getServer(serverId);
        // console.log(this.activatedRoute.data['server']);
        this.server = this.activatedRoute.snapshot.data['server'];

        // this.activatedRoute.params.subscribe(
        //     (params: Params) => {
        //         this.server = this.serversService.getServer(+params['id']);
        //     }
        // );

        this.activatedRoute.data.subscribe((data: Data) => {
            //this.server = this.serversService.getServer(+data['serverid']);
            this.server = data['server'];
        });

    }

    editServer() {
        this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
    }
}

