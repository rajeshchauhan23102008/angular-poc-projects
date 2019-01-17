import { Component, Output, EventEmitter } from '@angular/core';
import { LogService } from '../_services/log.service';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-newaccount',
    templateUrl: './newaccount.component.html',
    providers: [LogService]
})
export class NewAccountComponent {

    @Output('onNewAccountCreation') onNewAccountCreation = new EventEmitter<{ name: string, status: string }>();

    constructor(private logService: LogService, private acctService: AccountService) {

        this.acctService.statusUpdated.subscribe(
            (status: string) => alert('new status is ' + status)
        );
    }

    addNewAccount(accountName: HTMLInputElement, accountStatus: HTMLInputElement) {

        this.logService.logAccountStatus(accountStatus.value);
        //console.log('Server status has been changed to :' + accountStatus);


        this.acctService.onNewAccountCreation({
            name: accountName.value,
            status: accountStatus.value
        });
    }
}
