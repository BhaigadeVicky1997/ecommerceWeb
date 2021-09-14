import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    CoreModule,
    FeaturesModule,
    SharedModule
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    CoreModule,
    FeaturesModule,
    SharedModule
  ],
  providers: [],
})
export class CommonmodulesModule { }
