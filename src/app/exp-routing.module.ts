import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { Signup1Component } from './signup1/signup1.component';

const routes: Routes = [
  // {
  //   path:"signup1",
  //   component:Signup1Component
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ExpRoutingModule { 
  constructor(private router:Router){}
  signup1(){
    this.router.navigate(['/signup1'])
  }
  mycomp(){
    this.router.navigate(['/mycomp'])
  }
 }
