/*
  Create a Form with the following Controls and Validators
  
          1) Project Name (should not be empty)
          2) Mail (should not be a empty and a valid email)
          3) Project Status Dropdown, with three values: 'Stable', 'Critical', 'Finished'
          4) Submit Button

          Add your own Validator which doesn't allow "Test" as a Project Name

          Also implement that Validator as an async Validator (replace the other one)

          Upon submitting the form, simply print the value to the console

 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';

  projectEntryForm: FormGroup;
  status = [
    { value: 'stable', display: 'Stable' },
    { value: 'critical', display: 'Critical' },
    { value: 'finished', display: 'Finished' }
  ];

  onSubmit() {
    console.log(this.projectEntryForm);
    console.log(this.projectEntryForm.value);
  }

  ngOnInit() {

    // create form.
    this.projectEntryForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjectNameCheckAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    });

  }

  forbiddenProjectNameCheckAsync(formControl: FormControl): Promise<any> | Observable<any> {

    const forbiddenProjectNames = ['Test', 'test', 'xyz'];

    const promiseToReturn = new Promise(
      (resolve, reject) => {

        setTimeout(() => {
          if (forbiddenProjectNames.indexOf(formControl.value) !== -1) {
            resolve({ 'forbiddenProjectName': true });
          }

          resolve(null);

        }, 2000);
      });

    return promiseToReturn;

  }

  forbiddenProjectNameCheck(formControl: FormControl): { [key: string]: boolean } {

    const forbiddenProjectNames = ['Test', 'test', 'xyz'];

    if (forbiddenProjectNames.indexOf(formControl.value) !== -1) {
      return ({ 'forbiddenProjectName': true });
    }

    return null;

  }

}
