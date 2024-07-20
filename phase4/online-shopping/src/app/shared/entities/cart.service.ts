import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
})
export class CartService{
    constructor(private http:Http){   
    }
    addToCart(email,cart){
       // console.log("cart 11",email,cart)
        return this.http.put('api/cart'+'/'+email,cart)
        .toPromise()
        .then(response=>response)
        .catch(this.error)
    }
    updateCart(pid,email,quantity){
        return this.http.put('api/updateCart'+'/'+email+'/'+quantity+'/'+'/'+pid,quantity)
        .toPromise()
        .then(response=>response)
        .catch(this.error)
    }
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}