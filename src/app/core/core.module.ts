import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { WhyweComponent } from './whywe/whywe.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
]



@NgModule({
  declarations: [LoginComponent, SignupComponent, HeaderComponent, FooterComponent, AboutusComponent,
    BlogComponent, WhyweComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    SharedModule, RouterModule,SidebarComponent, LoginComponent, SignupComponent, HeaderComponent, FooterComponent, AboutusComponent, BlogComponent, WhyweComponent
  ]
})
export class CoreModule { }
