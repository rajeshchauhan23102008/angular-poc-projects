import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { CounterService } from '../../_services/counter.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent implements OnInit, AfterContentChecked {

    inactiveUsers: string[];
    inactiveActionCounter: number;

    constructor(private userService: UserService, private counterService: CounterService) { }

    ngOnInit() {
        this.inactiveUsers = this.userService.inactiveUsers;
    }

    ngAfterContentChecked() {
        this.inactiveActionCounter = this.counterService.inactiveCounter;
    }

    activateUser(index: number) {
        this.userService.activateUser(index);
    }
}
