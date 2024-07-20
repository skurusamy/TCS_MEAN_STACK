import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup,  Validators } from '@angular/forms';
import { CATEGORIES } from '../shared/assests/product-categories';
import { Product } from '../shared/entities/product.models';
import { ProductService } from '../shared/entities/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories = CATEGORIES;
  addProductForm:FormGroup;
  pid:FormControl;
  pname:FormControl;
  brand:FormControl;
  category:FormControl;
  price:FormControl;
  quantity:FormControl;
  p_img:FormControl;
  file:File=null;
  error: boolean;
  isSuccess: boolean=false;
  msg:string;
  createFormControl(){
    this.pid = new FormControl('',[Validators.required,,Validators.pattern('^P[0-9]{3}$')])
    this.pname = new FormControl('',[Validators.required]);
    this.brand = new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]);
    this.category= new FormControl('',[Validators.required]);
    this.price = new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]);
    this.quantity = new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]);
    this.p_img = new FormControl('',[Validators.required]);
  }
  createForm(){
    this.addProductForm = new FormGroup({
      pid:this.pid,
      pname:this.pname,
      brand:this.brand,
      category:this.category,
      price:this.price,
      quantity:this.quantity,
      p_img:this.p_img
    })
  }
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.createFormControl();
    this.createForm();
  }
  
  addProduct(){
    
    const product = new Product(this.pid.value,this.pname.value,this.brand.value,this.category.value,this.price.value,this.quantity.value);
   
    this.productService.addProduct(product).then((result)=>{
      if(result ==undefined){
        this.msg="Product Already Exist"  
        this.addProductForm.reset();
        this.error = true;        
        this.isSuccess=true;
        
      }
      else{
        console.log("68 new product:",product)
        this.msg="Product added successfully"
        this.addProductForm.reset();
        this.error= false;
        this.isSuccess=true;
        
        
      }
    })
  }

}
