import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-form';

  user: any = {};
  isFormSubmitted: boolean = false;

  @ViewChild('myForm') myForm: NgForm;

  subscriptions: any = [
    { display: 'Basic', value: 'basic' },
    { display: 'Advanced', value: 'adv' },
    { display: 'Professional', value: 'pro' }
  ];

  selectedSubscription: string = 'adv';

  submit() {

    if (this.myForm.valid) {
      this.isFormSubmitted = true;

      this.user = {
        email: this.myForm.value.email,
        subscription: this.myForm.value.subscription,
        password: this.myForm.value.password
      };

      console.log(this.user);

      // reset form with default values.
      this.myForm.reset({
        email: 'ramesh@gmail.com',
        password: 'test',
        subscription: 'pro'
      });
    }
  }
}
