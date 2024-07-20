import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../shared/entities/product.models';
import { ProductService } from '../shared/entities/product.service';
import { UserService } from '../shared/entities/user.service';

@Component({
  selector: 'app-user-view-wishlist',
  templateUrl: './user-view-wishlist.component.html',
  styleUrls: ['./user-view-wishlist.component.css']
})
export class UserViewWishlistComponent implements OnInit {
  products: Array<IProduct> = [];
  email:string;
  list  :any
  error: boolean=false;
  pid:string
  isSuccess: boolean=false;
  constructor(
    private userService:UserService,
    private productService:ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('userEmail');
    this.loadList();
  }
  loadList(){
    this.products.length=0;
    this.userService.loadList(this.email).then((result)=>{
      if(result == undefined)
       this.error = true;
     else{
       this.error=false;
       
       for(var i=0;i<result.mylist.length;i++){
        this.pid = result.mylist[i]
        this.productService.getProductDetails(this.pid).then((res)=>{
          if(res == undefined)
            this.error = true;
          else
            this.products.push(res);
            
        })
       }
       
     }
     })
     console.log("wish 30",this.products)
  }
  delete(pid){
    this.userService.deleteWishList(pid,this.email).then((result)=>{
      if(result == undefined)
        this.error = true;
      else{
       
       this.isSuccess=true;
        this.error = false;
        this.products.length=0;
       
        
      }
    })
  }

}
