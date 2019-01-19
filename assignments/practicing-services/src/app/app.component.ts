import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
}
