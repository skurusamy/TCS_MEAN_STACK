import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../shared/entities/login.model';
import { LoginService } from '../shared/entities/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm:FormGroup;
  
  email:FormControl;
  password:FormControl;
  login:boolean=true;
  error: boolean = false;
  errormsg:string;
  pass:boolean=false;
  
  createFormControl() { 
    this.email = new FormControl('',
                      [Validators.required,
                      Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])
     this.password = new FormControl('',
                      [Validators.required] )
  }
  createForm(){
    this.loginForm = new FormGroup({
      email:this.email,
      password:this.password
    })
   
  }
  constructor(
    private router:Router,
    private loginService:LoginService,
  ){
  }
  ngOnInit(): void {
    document.body.classList.remove('bg_clr')
    document.body.classList.remove('bg_img1')
    document.body.classList.add('bg_img');
    this.createFormControl();
    this.createForm(); 
  }
  register(
  ){
    
    this.router.navigate(['/app/new-user'])
    console.log("in new user")
  }
  checkEmailAndPassword(){
    const acc = new Login(this.email.value,this.password.value);
    console.log(this.email.value,this.password.value)
    if(this.email.value=="admin@gmail.com" && this.password.value=="admin123"){
      this.loginForm.reset();
      this.router.navigate(['/app/admin-home'])
    }
    else{
      this.loginForm.reset();
      this.loginService.checkEmailAndPassword(acc).then((result)=>{
        if(result == undefined){
          this.error = true;
          this.errormsg = "Invalid Email/Password"
        }else{
          this.handleResponse(result);
          this.error= false;
          const user = result;
          this.router.navigate(['/user-home'])
          
        }
      })
    }
  }
  handleResponse(data){
    sessionStorage.setItem('userName', data.name);
    sessionStorage.setItem('userEmail',data.email);
  }
  getPassword(){
    this.router.navigate(['/forgot-password'])
  }
  
}
