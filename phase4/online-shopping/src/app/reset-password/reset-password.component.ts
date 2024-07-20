import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/entities/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  newPwd:FormControl;
  conPwd:FormControl;
  name:string;
  email:string;
  isSuccess:boolean=false;
  resetPasswordForm:FormGroup;
  error: boolean;
  constructor(
    private loginService:LoginService
  ) { }
  createFormControl(){
    this.newPwd = new FormControl('',[Validators.required,Validators.minLength(6)])
    this.conPwd = new FormControl('',[Validators.required,Validators.minLength(6)])

  }
  createForm(){
  this.resetPasswordForm =  new FormGroup({
    newPwd:this.newPwd,
    conPwd:this.conPwd
  })
  }
  ngOnInit(): void {
    this.email = sessionStorage.getItem('userEmail');
    this.name = sessionStorage.getItem('userName');
    this.createFormControl();
    this.createForm();
  }
  resetPwd(){
    if(this.newPwd.value == this.conPwd.value)
      this.resetPassword();
    else{
      this.error=true;
      this.conPwd.reset();
    }
  }
  reset(){
    this.resetPasswordForm.reset();
    this.error=false;
  }
  resetPassword(){
    this.loginService.resetPassword(this.email,this.newPwd.value).then((result)=>{
      if(result == undefined)
        this.error = true;
      else{
        this.error =  false;
        this.resetPasswordForm.reset();
        this.isSuccess= true;
        console.log("57-reset",this.isSuccess)
       
      }
    })
  }
  
}
