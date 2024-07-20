import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/entities/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  allId :[];
  error: boolean;
  updateProductForm :FormGroup;
  pid:FormControl;
  isSuccess:boolean=false;
  quantity:FormControl;
  pro:any
  isAvailable: boolean=false;
  createFormControl(){
    this.pid = new FormControl('',[Validators.required])
    this.quantity = new FormControl('',[Validators.required]);
    
  }
  createForm(){
    this.updateProductForm = new FormGroup({
      pid:this.pid,
      quantity:this.quantity,
     
    })
  }
  constructor(
    private productService :ProductService,
  ) { }

  ngOnInit(): void {
    this.createFormControl();
    this.createForm();
    this.productService.getProductId().then((result)=>{
      if(result == undefined)
        this.error = true;
      else { 
        this.error = false;
        this.allId = result;
       


      }
    })
  }
  viewProduct(){
    //console.log("update-product 60",this.pid.value)
    this.productService.getProductDetails(this.pid.value).then((result)=>{
      if(result == undefined)
        this.error = true;
      else{
        this.isAvailable =true;
        this.error =  false;
        this.pro =result;
      }
    })
  }
  updateProduct(){
    this.productService.updateProduct(this.pid.value,this.quantity.value).then((result)=>{
      if(result == undefined)
        this.error = true;
      else{
        this.error =  false;
        this.afterUpdate();
      }
    })
  }
  afterUpdate(){
    this.isSuccess= true;
    this.isAvailable=false;
  }

}
