// manage an array of users.
// contains functionality for user activation.
// contain functionality for user deactivation.

import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
    activeUsers:
        string[] = ['rajesh',
            'sachin',
            'rohit',
            'mukesh'];

    inactiveUsers: string[] = [
        'pawan'];

    constructor(private counterService: CounterService) { }

    activateUser(index: number) {
        this.activeUsers.push(this.inactiveUsers[index]);
        this.inactiveUsers.splice(index, 1);

        //this.counterService.activeCounter += 1;
        this.counterService.updateCounter('active');
    }

    deactivateUser(index: number) {
        this.inactiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);

        //this.counterService.inactiveCounter += 1;
        this.counterService.updateCounter('inactive');
    }
}
