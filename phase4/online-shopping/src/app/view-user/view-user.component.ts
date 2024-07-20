import { Component, OnInit } from '@angular/core';
import { IUser, User } from '../shared/entities/user.model';
import { UserService } from '../shared/entities/user.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  error:boolean=false;
  users: Array<IUser>=[]
 
  u:User;
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.loadAll();
    

  }
  loadAll(){
    this.userService.loadAllUsers().then((result)=>{
      if(result == undefined){
        this.error = true;
      }
      else{
        this.error = false;
        this.users= result;
      }
    })
  }
  delete(email){
    console.log("view-user:32",email)
  }
  open(user){
    console.log(user);
    this.u = user;

  }
}
