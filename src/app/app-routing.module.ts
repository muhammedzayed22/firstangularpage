import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Signup1Component } from './signup1/signup1.component';
import { LoginComponent } from './login/login.component';
import { ExpComponent } from './exp/exp.component';
import { AdminComponent } from './login/admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CustDashComponent } from './cust-dash/cust-dash.component';


const routes: Routes = [
  { 
    component:Signup1Component,
    path:''
  },
  {
    path:'app',
    component:AppComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'exp',
    component:ExpComponent
  },
  {
    component:AdminComponent,
    path:'admin'
  },
  {
    path:'admin-dshb',
    component:AdminDashboardComponent
  },
  {
    path:'frontpage',
    component:FrontpageComponent
  },
  {
    path:'cust-dash',
    component:CustDashComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { 
 }
