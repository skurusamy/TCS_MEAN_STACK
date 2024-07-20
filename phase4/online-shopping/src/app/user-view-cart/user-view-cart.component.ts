import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICart } from '../shared/entities/card.model';
import { CartService } from '../shared/entities/cart.service';
import { IProduct } from '../shared/entities/product.models';
import { UserService } from '../shared/entities/user.service';

@Component({
  selector: 'app-user-view-cart',
  templateUrl: './user-view-cart.component.html',
  styleUrls: ['./user-view-cart.component.css']
})
export class UserViewCartComponent implements OnInit {
  email:string;
  products: Array<ICart> = [];
  updateCartForm:FormGroup;
  quantity:FormControl
  isSuccess:boolean=false;
  msg:string;
  createFormControl(){
    
    this.quantity = new FormControl('',[Validators.required]);
    
  }
  createForm(){
    this.updateCartForm = new FormGroup({
     
      quantity:this.quantity,
     
    })
  }
  constructor(
    private userService:UserService,
    private cartService:CartService,
    private cdref: ChangeDetectorRef
  ) { 
    
  }
  error: boolean=false;
  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }
  ngOnInit(): void {
   
    this.createFormControl();
    this.createForm();
    this.email = sessionStorage.getItem('userEmail');
    this.loadList();
  }
  loadList(){
    this.userService.loadCart(this.email).then((result)=>{
      if(result == undefined)
       this.error = true;
     else{
       this.error=false;
       this.products = result;
      console.log("48view cart",result)
       
     }
     })
    
  }
  updateCart(pid,quantity){
    this.cartService.updateCart(pid,this.email,quantity).then((result)=>{
      if(result == undefined)
        this.error = true;
      else  
        this.error = false;
        this.isSuccess=true;
    })
  }
 addCart(pid){
  this.updateCart(pid,1)
  this.msg="Product added to the cart"
 }
 removeCart(pid){
   this.updateCart(pid,-1)
   this.msg="Product removed from the cart"

 }
}
