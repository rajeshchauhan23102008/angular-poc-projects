import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from '../_services/log.service';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    providers: [LogService]
})
export class AccountComponent {

    @Input() account: { name: string, status: string };
    @Input() index: number;

    // @Output() onAccountStatusUpdated = new EventEmitter<{ index: number, status: string }>();

    constructor(private logService: LogService, private acctService: AccountService) {

    }

    // onAccountStatusChange(acctStatus: string) {
    //     this.onAccountStatusUpdated.emit({
    //         index: this.index,
    //         status: acctStatus
    //     });

    //     //console.log('Server status has been changed to :' + acctStatus);
    //     this.logService.logAccountStatus(acctStatus);
    // }

    onAccountStatusChange(acctStatus: string) {
        this.acctService.onAccountStatusUpdated({
            index: this.index,
            status: acctStatus
        });

        //console.log('Server status has been changed to :' + acctStatus);
        this.logService.logAccountStatus(acctStatus);

        this.acctService.statusUpdated.emit(acctStatus);
    }

}
