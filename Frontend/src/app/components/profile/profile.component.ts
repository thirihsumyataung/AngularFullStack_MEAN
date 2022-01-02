import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  profileList=[{firstname:'John',lastname:'Walker',email:'john@gmail.com',address:'83, Fifth Avenue, New York',phone:8933221122,interests:'Apple, Samsung, Laptops'}]
  ngOnInit(): void {
  }

}
