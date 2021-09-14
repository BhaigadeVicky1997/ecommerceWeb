import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('opacityAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
    });
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  ngOnInit(): void {
  }

  onChangeTickets(e: any) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }

  onSubmit() {
    console.log('test');
    this.submitted = true;

    // // stop here if form is invalid
    // if (this.dynamicForm.invalid) {
    //   return;
    // }
 
    console.log(JSON.stringify(this.dynamicForm.value, null, 4));
    // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
  }


}
