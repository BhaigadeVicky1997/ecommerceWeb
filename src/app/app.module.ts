import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonmodulesModule } from './commonmodules.module';
import { SignupmodalComponent } from './shared/popup/signupmodal/signupmodal.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonmodulesModule,
    ReactiveFormsModule
  ],
  entryComponents:[SignupmodalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
