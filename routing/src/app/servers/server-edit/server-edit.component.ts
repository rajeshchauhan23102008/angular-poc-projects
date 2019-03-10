import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../_services/servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { parse } from 'url';

@Component({
    selector: 'app-server-edit',
    templateUrl: './server-edit.component.html'
})
export class ServerEditComponent implements OnInit {

    // server: { id: number, name: string, status: string } = {
    //     id: 0,
    //     name: '',
    //     status: ''
    // };

    server: { id: number, name: string, status: string } = { id: 0, name: '', status: '' };
    allowEdit = false;

    constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        //Load a server on component initialization based on route input.

        // let serverId = 0;
        // serverId = parseInt(this.activatedRoute.snapshot.params['id']);

        this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id']);

        this.allowEdit = this.activatedRoute.snapshot.queryParams['mode'] === 'edit' ? true : false;

        // console.log('this.allowEdit', this.allowEdit);
        // console.log(this.activatedRoute.snapshot.params);
        // console.log(this.activatedRoute.snapshot.params['id']);
        // console.log(this.activatedRoute.snapshot.queryParams);
        // console.log(this.activatedRoute.snapshot.queryParams['mode']);
        // console.log(this.activatedRoute.fragment);

        this.activatedRoute.params.subscribe((params: Params) => {
            //console.log('params updated', params); }
            this.server = this.serversService.getServer(+params['id']);
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

    onServerUpdate() {
        this.serversService.updateServerStatus(this.server);
    }
}
