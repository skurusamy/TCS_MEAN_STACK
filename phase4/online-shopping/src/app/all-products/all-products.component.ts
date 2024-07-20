import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../shared/assests/product-categories';
import { IProduct } from '../shared/entities/product.models';
import { ProductService } from '../shared/entities/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  error: boolean=false;
  products: Array<IProduct> = [];
  constructor(
    private productService:ProductService
  ) { }
  categories=CATEGORIES;
  ngOnInit(): void {
  this.loadAll();
  
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
       console.log("49-all",this.products)
     }
     })
  }
}
  

}
