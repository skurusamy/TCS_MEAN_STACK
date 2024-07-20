import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/entities/user.service';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }
  updatePaymentForm:FormGroup;
  email:string;
  isSuccess:boolean=false;
  name:string;
  cname:FormControl;
  card_no:FormControl;
  date:FormControl;
  ccv:FormControl;
  error: boolean = false;
  createFormControl(){
    this.cname = new FormControl('',[Validators.required,Validators.minLength(2), Validators.pattern('^[a-zA-Z \-\']+')]);
    this.card_no = new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')]);
    this.date = new FormControl('',[Validators.required,Validators.pattern('(0[1-9]|10|11|12)-20[2-9][1-9]$')]);
    this.ccv = new FormControl('',[Validators.required,Validators.pattern('^[0-9]{3}$')]);
  
  }
  createForm(){
    this.updatePaymentForm = new FormGroup({
      cname:this.cname,
      card_no:this.card_no,
      date:this.date,
      ccv:this.ccv,
    })
  }
  ngOnInit(): void {
    this.email = sessionStorage.getItem('userEmail');
    this.name = sessionStorage.getItem('userName');
    this.createFormControl();
    this.createForm();
  }
  updatePayment(){
    this.userService.updatePayment(this.email,this.cname.value,this.card_no.value,this.date.value,this.ccv.value).then((result)=>{
      if(result == undefined)
        this.error = true;
      else
        this.error = false;
        this.isSuccess=true;
        this.updatePaymentForm.reset();
    })
  }
}
