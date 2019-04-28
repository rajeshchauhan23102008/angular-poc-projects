import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

    userid: number;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.userid = +params['id'];
            }
        );
    }

    activateUser() { 
        this.userService.activateUser.next(this.userid);
    }
}
