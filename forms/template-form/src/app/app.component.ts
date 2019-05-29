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
  formData: any = {};
  isFormSubmitted: boolean = false;

  // onSubmit(formVar: NgForm) {
  //   console.log(formVar);
  //   console.log(this.myEmail);
  // }

  onSubmit() {
    console.log(this.myForm);

    this.isFormSubmitted = true;

    this.formData = {
      username: this.myForm.value.userData.username,
      email: this.myForm.value.userData.email,
      secretQuestion: this.myForm.value.secretQuestion,
      answer: this.myForm.value.answer,
      gender: this.myForm.value.gender
    };

    this.myForm.reset();
  }

  suggestUsername() {
    const suggestedUsername = 'Superuser';

    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedUsername,
    //     email: ''
    //   },
    //   secretQuestion: 'school',
    //   answer: '',
    //   gender: 'female'
    // });

    this.myForm.form.patchValue({
      userData: {
        username: suggestedUsername
      }
    });

  }
}
