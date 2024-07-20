import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { USA_STATES } from '../shared/assests/usa-states';
import { Login } from '../shared/entities/login.model';
import { LoginService } from '../shared/entities/login.service';
import { IUser, User } from '../shared/entities/user.model';
import { UserService } from '../shared/entities/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  registerForm:FormGroup;
  name:FormControl;
  email:FormControl;
  password:FormControl;
  phone:FormControl;
  street:FormControl;
  country:FormControl;
  state:FormControl;
  states = USA_STATES;
  city:FormControl;
  zip:FormControl;
  cname:FormControl;
  card_no:FormControl;
  date:FormControl;
  ccv:FormControl;
  isSuccess:boolean= false;
  error: boolean = false;
  
  createFormControl(){
    this.name=new FormControl('',[Validators.required,Validators.minLength(2), Validators.pattern('^[a-zA-Z \-\']+')]);
    this.email=new FormControl('',[
              Validators.required,
              Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
              ])
    this.password = new FormControl('',[Validators.required,Validators.minLength(6)])
    this.phone=new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]{10}$')]);
    this.street = new FormControl('',[Validators.required]),
    this.country=new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]);
    this.state = new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]);
    this.city = new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]);
    this.zip = new FormControl('', [Validators.required,Validators.pattern('^(?!0{3})[0-9]{3,5}$')]);
    this.cname = new FormControl('',[Validators.required,Validators.minLength(2), Validators.pattern('^[a-zA-Z \-\']+')]);
    this.card_no = new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')]);
    this.date = new FormControl('',[Validators.required,Validators.pattern('(0[1-9]|10|11|12)-20[2-9][1-9]$')]);
    this.ccv = new FormControl('',[Validators.required,Validators.pattern('^[0-9]{3}$')]);
  
  }
  createForm(){
    this.registerForm = new FormGroup({
      name:this.name,
      email:this.email,
      password:this.password,
      phone:this.phone,
      street:this.street,
      country:this.country,
      state:this.state,
      city:this.city,
      zip:this.zip,
      cname:this.cname,
      card_no:this.card_no,
      date:this.date,
      ccv:this.ccv
    })
  }
  constructor(
    private userService:UserService,
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    document.body.classList.remove('bg_img')
    document.body.classList.add('bg_clr');
    this.createFormControl();
    this.createForm();
    //console.log(this.zip);
  }
  register(){
    
  const user = new User(this.name.value,this.email.value,this.phone.value,this.country.value,this.state.value,this.city.value,this.street.value,this.zip.value,this.cname.value,this.card_no.value,this.date.value,this.ccv.value);
  const acc =  new Login(this.email.value,this.password.value)
  this.loginService.login(acc).then((result)=>{
    if(result == undefined){
      this.error = true;
    }else{
      this.error= false;
      //this.createFormControl.emit(result);
    }
  });
  this.userService.create(user).then((result: IUser)=>{
    if(result == undefined){
      this.error = true;
    }else{
      this.error= false;
      //this.createFormControl.emit(result);
    }
  });
  this.registerForm.reset();
}
  hideError() {
    this.error = false;
  }
login(){
  this.router.navigate(['/app/home'])
}
 

}
