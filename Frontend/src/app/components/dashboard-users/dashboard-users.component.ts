import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {
  users : User[] = []; 
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe((users) => {
      this.users = users;
      console.log(users);
      console.log(this.users);
      console.log(); 
    
      })
  }


}
