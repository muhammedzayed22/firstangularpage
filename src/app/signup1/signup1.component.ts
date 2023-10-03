import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component {
  [x: string]: any;
  // clearhistory:boolean=false;
  loginObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    Result: false,
    Message:''
  };
  registerObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    CreatedDate: new Date()
  };
  isRegister: boolean = false;
  temp1:boolean = false;
  temp2: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onRegister() {
    // this['http'].post("http://localhost:61334/api/Registration/Register", this.registerObj).subscribe((response: any)=>{
    // return true;
    // })
  }
  onLogin(){
    debugger;
  //   this['http'].post("http://localhost:61334/api/Registration/Login", this.loginObj).subscribe((response: any)=>{
  //     debugger;
  //     if(response.result) {
  //       alert(response.message)
  //       this.router.navigateByUrl('way2user-dashboard');
  //     } else {
  //       alert(response.message)
  //     }
  // })
    //way 1
    // alert(this.loginObj.UserName+" and "+this.loginObj.Password);
    
    if(this.loginObj.UserName == 'user123' && this.loginObj.Password =='user@123') {
      // localStorage.setItem('role','user');
      this.router.navigate(['/user-dash']);
      this.temp1=true;
    } else if (this.loginObj.UserName == 'admin' && this.loginObj.Password =='admin@123') {
      alert(this.loginObj.UserName+" and "+this.loginObj.Password);
      // localStorage.setItem('role','admin');
      this.router.navigate(['/login'],{replaceUrl: true});
      this.temp2=true;
    }
    //way 2

    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('way2user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('way2admin-dash');
    // }
  }

}
