import {Injectable } from '@angular/core';

import {Http} from '@angular/http';
import { IProduct, Product } from './product.models';
@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl = '/api/products';
    constructor(private http:Http){}
    addProduct(product:Product):Promise<IProduct>{
        
        return this.http.post(this.productUrl,product)
        .toPromise()
        .then(response => response.json())
        .catch(this.error);
    }
    getProductId(){
        return this.http.get(this.productUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    getProductDetails(pid){
        return this.http.get(this.productUrl+"/"+pid)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    updateProduct(pid,quantity){
        return this.http.put(this.productUrl+"/"+pid+"/"+quantity,pid)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    loadAll(){
        return this.http.get('/api/allproducts')
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    getCategories(category){
        return this.http.get('/api/allproducts'+"/"+category)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }

    
}