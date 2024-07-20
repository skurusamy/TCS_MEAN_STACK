import { Component, Input, OnInit } from '@angular/core';
import { CATEGORIES } from '../shared/assests/product-categories';
import { Cart } from '../shared/entities/card.model';
import { CartService } from '../shared/entities/cart.service';
import { IProduct } from '../shared/entities/product.models';
import { ProductService } from '../shared/entities/product.service';
import { UserService } from '../shared/entities/user.service';

@Component({
  selector: 'app-user-purchase',
  templateUrl: './user-purchase.component.html',
  styleUrls: ['./user-purchase.component.css']
})
export class UserPurchaseComponent implements OnInit {
  email:string;
  categories=CATEGORIES;
  error: boolean=false;
  products: Array<IProduct> = [];
  isSuccess: boolean=false;
  msg:string;
  
  constructor(
    private productService:ProductService,
    private userService:UserService,
    private cartService:CartService
    
  ) { }

  ngOnInit(): void {
    this.loadAll();
    this.email = sessionStorage.getItem('userEmail');
    //console.log("in user- 22",this.email)
    
   
  }
  loadAll() {
    this.productService.loadAll().then((result)=>{
      if(result == undefined)
       this.error = true;
     else{
       this.error=false;
       this.products = result;
       
     }
     })
   }
   getCategory(category){
    if(category=="ALL"){
      this.loadAll();
    }
    else{
    this.productService.getCategories(category).then((result)=>{
      if(result == undefined)
       this.error = true;
     else{
       this.error=false;
       this.products = result;
       console.log("49-purchase",this.products)
     }
     })
  }
}
wishList(pid){
  console.log("58-purchase",pid,this.email)
  this.userService.wishList(pid,this.email).then((result)=>{
    if(result == undefined){
       this.error = true;
       this.isSuccess=true;
       this.msg="Product Already in wish list"
    }
     else{
       this.error=false;
       this.isSuccess=true;
       this.msg="Added to WishList"
     }
  })

}
addToCart(pid,pname,brand,category,price){
  const cart = new Cart(pid,pname,brand,category,1,price);
  this.cartService.addToCart(this.email,cart).then((result)=>{
    if(result == undefined)
       this.error = true;
     else{
       this.error=false;
       this.isSuccess=true;
       this.msg="Added to Cart"
     }
  })

}

}
