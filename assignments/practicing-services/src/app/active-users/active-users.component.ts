import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { CounterService } from '../../_services/counter.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent implements OnInit {
    activeUsers: string[];
    activeActionCounter: number;

    constructor(private userService: UserService, private counterService: CounterService) { }

    ngOnInit() {
        this.activeUsers = this.userService.activeUsers;
        this.activeActionCounter = this.counterService.activeCounter;
    }

    deactivateUser(index: number) {
        this.userService.deactivateUser(index);
    }
}
