import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user-service';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: User[];
  constructor(private userService:UserService) { }

  ngOnInit(){
    this.userService.getAllUser().subscribe((response:any)=>{
    this.users = response;
    //alert("response: "+response)
    });
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe((response: any) => {
      console.log("res: "+response)
      this.users = this.users.filter((e:any) => {
      return id!= e.id;
    });
  });
}

}
