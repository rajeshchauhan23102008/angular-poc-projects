import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(private acctService: AccountService) { }
  // accounts: { name: string, status: string }[] = [
  //   {
  //     name: 'sbi account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'icici account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'hdfc account',
  //     status: 'inactive'
  //   }
  // ];

  ngOnInit() {
    //console.log(this.accounts);
    this.accounts = this.acctService.accounts;
  }

  // onNewAccountCreation(data: { name: string, status: string }) {
  //   this.accounts.push(data);
  //   //console.log(this.accounts);

  // }

  // onAccountStatusUpdated(data: { index: number, status: string }) {
  //   this.accounts[data.index]['status'] = data.status;
  //   //console.log(this.accounts);

  // }

}
