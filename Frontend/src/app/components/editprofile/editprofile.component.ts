import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor() { }

  profileList=[{firstname:'John',lastname:'Walker',email:'john@gmail.com',address:'83, Fifth Avenue, New York',phone:8933221122,interests:'Apple, Samsung, Laptops'}]

  ngOnInit(): void {
  }

}
