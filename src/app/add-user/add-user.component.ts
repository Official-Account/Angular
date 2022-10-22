import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = new User;
  showAlert = false;
    constructor(private userService: UserService) { }

  ngOnInit(): void {
   
  }

  addUser(){
    this.userService.addUser(this.user).subscribe((response)=> {
      console.log(response)
      this.showAlert = true;
      this.user = new User();
    });
  }
   closeAlert(){
    this.showAlert = false;
   }

}
