import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-signupmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.scss']
})
export class SignupmodalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }

}
