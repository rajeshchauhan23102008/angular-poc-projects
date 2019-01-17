import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountService {

    accounts: { name: string, status: string }[] = [
        {
            name: 'sbi account',
            status: 'active'
        },
        {
            name: 'icici account',
            status: 'active'
        },
        {
            name: 'hdfc account',
            status: 'inactive'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private logService: LogService) { }

    onNewAccountCreation(data: { name: string, status: string }) {
        this.accounts.push(data);
        this.logService.logAccountStatus(data.status);
        //console.log(this.accounts);
    }

    onAccountStatusUpdated(data: { index: number, status: string }) {
        //this.accounts[data.index]['status'] = data.status;
        this.accounts[data.index].status = data.status;
        this.logService.logAccountStatus(data.status);
        //console.log(this.accounts);

    }

}
