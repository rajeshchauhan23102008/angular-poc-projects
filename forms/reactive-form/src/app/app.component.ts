import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';

  genders: any = [
    { display: 'Male', value: 'm' },
    { display: 'Female', value: 'f' },
    { display: 'Non Binary', value: 'nb' }
  ];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenUserNameCheck]),
        // 'email': new FormControl(null, [Validators.required, Validators.email, this.forbiddenEmailCheck])
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailCheckAsync)
      }),
      'gender': new FormControl('nb'),
      'hobbies': new FormArray([])
    });


    // // Form Values changes observable.
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // Form Status Changes observable.
    this.signupForm.statusChanges.subscribe(
      status => console.log(status)
    );

    // With setValue() method we need to set all the formControl values.
    this.signupForm.setValue({
      'userData': {
        'username': 'pankaj',
        'email': 'pankaj@net4.com'
      },
      'gender': 'f',
      'hobbies': []
    });

    // Can patchValue() method we can set selective formControl(s) value(s).
    this.signupForm.patchValue({
      'userData': {
        'username': 'amit sharma'
      }
    });

  }

  forbiddenUserNameCheck(formControl: FormControl): { [key: string]: boolean } {

    const forbiddenUserNames = ['rajesh', 'keshari'];

    if (forbiddenUserNames.indexOf(formControl.value) !== -1) {
      return { 'forbiddenUsername': true };
    }

    return null;

  }

  // forbiddenEmailCheck(formControl: FormControl): { [key: string]: boolean } {
  //   const forbiddenEmails = ['test@test.com', 'xyz@xyz.com'];

  //   if (forbiddenEmails.indexOf(formControl.value) !== -1) {
  //     return { 'forbiddenEmail': true };
  //   }

  //   return null;
  // }

  forbiddenEmailCheckAsync(formControl: FormControl): Promise<any> | Observable<any> {
    const forbiddenEmails = ['admin@admin.com', 'abc@abc.com'];

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (forbiddenEmails.indexOf(formControl.value) !== -1) {
          resolve({ 'forbiddenEmail': true });
        }

        resolve(null);
      }, 2000);
    });

    return promise;
  }
  onSignupFormSubmit() {
    console.log(this.signupForm);
  }

  AddNewHobby() {
    const newHobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(newHobbyControl);
  }

  onReset() {
    // this.signupForm.reset(this.signupForm.value);
    this.signupForm.reset({
      'userData': {
        'username': 'Reset'
      },
      'gender': 'nb'
    });
  }
}
