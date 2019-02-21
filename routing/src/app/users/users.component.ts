import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    users: { name: string, id: number }[] = [
        { name: 'rajesh', id: 420 },
        { name: 'suresh', id: 9211 },
        { name: 'sachin', id: 789 },
        { name: 'pawan', id: 990 }
    ];
}
