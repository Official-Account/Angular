import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseurl=environment.API_BASE_URL;
  addUser(user:User){
    return this.http.post(this.baseurl+ "/addUser/", user);
  }

  getUser(user_id:number){
    return this.http.get(this.baseurl+ "/getUser/"+user_id);
  }
  getAllUser(){
    return this.http.get(this.baseurl+ "/getAllUser");
  }
  
  updateUser(id: number,user: User){

    return this.http.put(this.baseurl,"/updateUser/"+id);
  }

  deleteUser(user_id: number){
    return this.http.delete(this.baseurl+ "/deleteUser/"+user_id,
    { responseType: 'text' }
    );

  }
}
