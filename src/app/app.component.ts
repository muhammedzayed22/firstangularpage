import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:[`background-color:black`]
})
export class AppComponent {
  title = 'Welcome';
  num:number=34;
  name:String=""
  ifs:boolean=true;
  name1:String=""
  color:string=""

  array1:string[]=['a','b','c']
  obj1=[{name:"Zayed",dept:"ECE",ID:"101"},
        {name:"Mohd",dept:"CSE",ID:"102"},
        {name:"MDZD",dept:"EEE",ID:"103"},
        {name:"MZ",dept:"IT",ID:"104"}

      ]

  display(){
    alert("Welcome "+this.name)
  }
  get(name1:String)
  {
    return "Hello "+name1
  }
  constructor()
  {
    setTimeout(()=>{this.b1=false},3000)
  }
  b1:boolean=true;
  SearchValue:string=""
  date=new Date();
  amt:number=420.69
  
}
