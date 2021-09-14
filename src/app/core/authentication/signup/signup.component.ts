import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
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
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
