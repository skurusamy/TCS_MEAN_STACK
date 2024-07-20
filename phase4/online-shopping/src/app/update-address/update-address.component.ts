import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../shared/entities/user.model';
import { UserService } from '../shared/entities/user.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  updateAddressForm:FormGroup
  email:string
  isEdit:boolean = false;
  isView:boolean = true;
  name:string
  error=false;
  user:IUser;
  street:FormControl;
  country:FormControl;
  state:FormControl;
  city:FormControl;
  zip:FormControl;
  isSuccess:boolean=false;
  constructor(
    private userService:UserService
  ) { }
  createFormControl(){
    this.street = new FormControl('',[Validators.required]),
    this.country=new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]);
    this.state = new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]);
    this.city = new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]);
    this.zip = new FormControl('', [Validators.required,Validators.pattern('^(?!0{3})[0-9]{3,5}$')]);

  }
  createForm(){
    this.updateAddressForm = new FormGroup({
      street:this.street,
      country:this.country,
      state:this.state,
      city:this.city,
      zip:this.zip
    })
  }
  ngOnInit(): void {
    this.email = sessionStorage.getItem('userEmail');
    this.name = sessionStorage.getItem('userName');
    this.createFormControl();
    this.createForm();
    this.loadAddress();
  }
  loadAddress(){
    this.userService.loadUserByEmail(this.email).then((result)=>{
      if(result == undefined)
       this.error = true;
     else{
       this.error=false;
       this.user = result;
       //console.log("update-addr 58",this.user.street)
     }
     })
    
  }
  viewUpdate(){
   
    this.isEdit = true;
    this.isView = false;
  }
  viewOld(){
    this.loadAddress();
    this.isEdit = false;
    this.isView = true;
  }
  updateAddress(){
    this.userService.updateAddress(this.email,this.street.value,this.city.value,this.state.value,this.country.value,this.zip.value).then((result)=>{
      if(result == undefined)
        this.error = true;
      else{
        this.error =  false;
        this.isSuccess=true;
        this.updateAddressForm.reset();
        this.isEdit = false;
        this.isView = true;
      }
    })
  }
}
