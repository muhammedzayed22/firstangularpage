import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {
  admin:boolean=false;
  super:boolean=false;
  constructor(private router: Router) { }
  page(){
    
    this.router.navigate(["signup1"])
  }
}
