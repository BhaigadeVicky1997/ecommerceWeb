
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [

  ],
  imports: [
    MatRadioModule, MatInputModule,MatFormFieldModule,MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatIconModule, MatSelectModule, MatProgressBarModule
  ],
  exports: [MatRadioModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatIconModule, MatSelectModule, MatProgressBarModule]
})
export class MaterialModule { }
