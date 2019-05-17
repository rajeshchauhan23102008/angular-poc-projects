import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('email') myEmail: NgModel;
  @ViewChild('myForm') myForm: NgForm;

  defaultSecretQuestion: string = 'school';
  genders = ['male', 'female'];


  // onSubmit(formVar: NgForm) {
  //   console.log(formVar);
  //   console.log(this.myEmail);
  // }

  onSubmit() {
    console.log(this.myForm);
  }

  suggestUsername() {
    const suggestedUsername = 'Superuser';
  }
}
