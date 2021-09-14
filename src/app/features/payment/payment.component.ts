import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
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
export class PaymentComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
  }


}
