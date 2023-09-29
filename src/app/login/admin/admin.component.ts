import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  obj1=[{name:"Zayed",dept:"ECE",ID:"101"},
        {name:"Mohd",dept:"CSE",ID:"102"},
        {name:"MDZD",dept:"EEE",ID:"103"},
        {name:"MZ",dept:"IT",ID:"104"}

      ]
}
