import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private userService:UserService) { }
  id:number;
  user = new User();
  showAlert = false;

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.userService.getUser(this.id).subscribe((response:any) => {
    console.log(response)
    this.user = response;
    });
  }

  updateUser(){
   this.userService.updateUser(this.id,this.user).subscribe((response) => {//this.user
    console.log(response)
    this.user = new User();
   });
  }

  closeAlert(){
    this.showAlert=false;
  }

}
