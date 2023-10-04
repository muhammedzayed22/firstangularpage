import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './mycomp/log.component';
// import { SignupComponent } from './signup/signup.component';
import { Signup1Component } from './signup1/signup1.component';
import { AdminComponent } from './login/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register/register.component';
import { ExpComponent } from './exp/exp.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Router,Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CustDashComponent } from './cust-dash/cust-dash.component';
// import { UserModule } from './user/user.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogComponent,
    // SignupComponent,
    Signup1Component,
    AdminComponent,
    RegisterComponent,
    ExpComponent,
    AdminDashboardComponent,
    FrontpageComponent,
    CustDashComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    // UserModule
    
    

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export {RegisterComponent}