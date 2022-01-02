import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageorders',
  templateUrl: './manageorders.component.html',
  styleUrls: ['./manageorders.component.css']
})
export class ManageordersComponent implements OnInit {

  constructor() { }

  order=[{orderno:1222314123212313,email:'user@example.com',isdelivered:false},{orderno:1222314123212431,email:'newuser@example.com',isdelivered:true},{orderno:1222314123212431,email:'newuser@example.com',isdelivered:false}]
  ngOnInit(): void {
  }

}
