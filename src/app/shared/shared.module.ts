import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupmodalComponent } from './popup/signupmodal/signupmodal.component';
import { MaterialModule } from './material.module';
import { ReviewPopupComponent } from './popup/review-popup/review-popup.component';



@NgModule({
  declarations: [SignupmodalComponent, ReviewPopupComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ]
})
export class SharedModule { }
