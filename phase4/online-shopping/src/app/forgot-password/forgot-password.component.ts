import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/entities/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm:FormGroup;
  resemail:FormControl;
  error: boolean;
  errormsg:string
  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }
  createFormControl(){
    this.resemail = new FormControl('',
                      [Validators.required,
                      Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])
   
  }
  createForm(){
    this.resetForm = new FormGroup({
      resemail:this.resemail
    })
  }
  ngOnInit(): void {
    this.createFormControl();
    this.createForm(); 
  }
  forgotPassword(){
    this.loginService.forgotPassword(this.resemail.value).then((result)=>{
      if(result == undefined){
        this.error = true;
        this.errormsg="Invalid Email Id"
        this.resetForm.reset();
      }
      else
      {
        this.resetForm.reset();
        this.error = false;
        this.router.navigate(['/app/home'])
      }
    })
  }
  login(){
    this.router.navigate(['/app/home'])
  }
}
