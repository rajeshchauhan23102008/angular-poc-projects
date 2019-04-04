import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Data } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../../_services/servers.service';

import { CanComponentDeactivate } from '../../_guards/candeactivate.guard';

@Component({
    selector: 'app-server-edit',
    templateUrl: './server-edit.component.html'
})
export class ServerEditComponent implements OnInit, CanComponentDeactivate {

    // server: { id: number, name: string, status: string } = {
    //     id: 0,
    //     name: '',
    //     status: ''
    // };

    initialServer: { id: number, name: string, status: string };
    server: { id: number, name: string, status: string } = { id: 0, name: '', status: '' };
    allowEdit = false;
    isServerStateValid = false;

    constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        //Load a server on component initialization based on route input.

        // let serverId = 0;
        // serverId = parseInt(this.activatedRoute.snapshot.params['id']);

        this.initialServer = this.serversService.getServer(+this.activatedRoute.snapshot.params['id']);
        this.server = Object.assign({}, this.initialServer);

        this.allowEdit = this.activatedRoute.snapshot.queryParams['mode'] === 'edit' ? true : false;

        // console.log('this.allowEdit', this.allowEdit);
        // console.log(this.activatedRoute.snapshot.params);
        // console.log(this.activatedRoute.snapshot.params['id']);
        // console.log(this.activatedRoute.snapshot.queryParams);
        // console.log(this.activatedRoute.snapshot.queryParams['mode']);
        // console.log(this.activatedRoute.fragment);

        this.activatedRoute.params.subscribe((params: Params) => {
            //console.log('params updated', params); }
            this.initialServer = this.serversService.getServer(+params['id']);
            this.server = Object.assign({}, this.initialServer);
        });

        this.activatedRoute.queryParams.subscribe(
            (params: Params) => {
                // console.log('query Params updated', params);
                this.allowEdit = params['mode'] === 'edit' ? true : false;

                // console.log('this.allowEdit', this.allowEdit);

            }
        );

        this.activatedRoute.fragment.subscribe(
            (frag: string) => {
                console.log('fragment updated!!!', frag);
            }
        );
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.allowEdit) {
            return true;
        }

        if ((this.initialServer.name !== this.server.name || this.initialServer.status !== this.server.status) && !this.isServerStateValid) {

            return confirm('You have edited the Server but not saved the changes, Are you sure?');

        } else {
            return true;
        }
    }

    onServerUpdate() {
        this.serversService.updateServerStatus(this.server);
        this.isServerStateValid = true;
    }
}
