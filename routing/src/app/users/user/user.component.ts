import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
    user: { name: string, id: number };
    paramsSubscription: Subscription;

    constructor(private actRoutes: ActivatedRoute) { }

    ngOnInit() {
        this.user = {
            id: this.actRoutes.snapshot.params['id'],
            name: this.actRoutes.snapshot.params['name']
        };

        this.paramsSubscription = this.actRoutes.params.subscribe(
            (params: Params) => {
                this.user.id = params['id'];
                this.user.name = params['name'];
            });
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}
