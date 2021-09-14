import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', component:HomeComponent },
]


@NgModule({
  declarations: [HomeComponent, SliderComponent, HomecontentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule
  ],
  exports:[
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
