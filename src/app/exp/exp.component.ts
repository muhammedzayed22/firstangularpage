import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Signup1Component } from '../signup1/signup1.component';

const routes: Routes = [
  {
    path:"signup1",
    component:Signup1Component
  }
]

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})




export class ExpComponent {

  
  constructor(private router:Router){}
  signup1(){
    this.router.navigate(['/signup1'])
  }
  
}
