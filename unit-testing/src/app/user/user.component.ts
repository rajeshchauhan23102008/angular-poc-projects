import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from './data.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [UserService, DataService]
})
export class UserComponent implements OnInit {

    user: { name: string };
    data: string;

    isLoggedIn: boolean = false;

    constructor(private userService: UserService, private dataService: DataService) { }

    ngOnInit() {
        this.user = this.userService.user;

        this.dataService.getDetails().then((response) => {
            this.data = response;
        });
    }



}