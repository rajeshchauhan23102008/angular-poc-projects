import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observables';

  isUser1Activated: boolean = false;
  isUser2Activated: boolean = false;

  private userObsSubs: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userObsSubs = this.userService.activateUser.subscribe(
      (data: number) => {
        if (data === 1) {
          this.isUser1Activated = true;
        } else if (data === 2) {
          this.isUser2Activated = true;
        }
      }
    );

  }

  ngOnDestroy() {
    this.userObsSubs.unsubscribe();
  }

}
