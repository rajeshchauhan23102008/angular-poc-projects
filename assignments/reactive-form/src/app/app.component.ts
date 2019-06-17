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
import { CustomValidators } from './custom-validator';

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
      'projectName': new FormControl(null, [Validators.required, CustomValidators.forbiddenProjectNameCheck]
        , CustomValidators.forbiddenProjectNameCheckAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    });

    //this.observableTest();
  }

  // observableTest() {

  //   console.log("- Creating observable");
  //   const observable = new Observable(observer => {
  //     console.log("- Observable running");
  //     observer.next(1);
  //   });
  //   console.log("- Registering handler");
  //   observable.subscribe(v => {
  //     setTimeout(() => {
  //       console.log("- Handling result: " + v)
  //     }, 3000);
  //   });

  //   console.log("- Exiting main");
  // }



}
