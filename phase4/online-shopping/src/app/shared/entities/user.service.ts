import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { IProduct } from './product.models';
import { IUser,User } from './user.model';
@Injectable({
    providedIn: 'root'
})
export class UserService{
    private userUrl = '/api/users';
    constructor(private http:Http){   
    }
    create(user: User):Promise<IUser>{
            console.log("user.service 12",user)
            return this.http.post(this.userUrl,user)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
            
    }
    loadAllUsers(){
        return this.http.get('/api/allUsers')
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }
    wishList(pid,email){
        
        return this.http.put('/api/wishList'+'/'+email+'/'+pid,email)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    loadList(email){
        return this.http.get('/api/getWishList'+'/'+email)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    loadCart(email){
        return this.http.get('/api/getCart'+'/'+email)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }

    deleteWishList(pid,email){
      
        return this.http.put('/api/deleteList'+'/'+pid+'/'+email,email)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    loadUserByEmail(email){
        return this.http.get('/api/allUsers'+'/'+email)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }
    updateAddress(email,street,city,state,country,zip){
        var url ='/api/updateAddress'+'/'+email+'/'+ street +'/'+ city +'/'+ state +'/'+country+'/'+zip;
        return this.http.put(url,email)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    updatePayment(email,cname,card_no,date,ccv){
        var url ='/api/updatePayment'+'/'+email+'/'+ cname +'/'+ card_no +'/'+ date +'/'+ccv;
        return this.http.put(url,email)
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
