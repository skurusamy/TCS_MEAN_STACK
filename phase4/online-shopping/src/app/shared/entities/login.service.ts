import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { ILogin,Login } from './login.model';
import { IUser } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private loginUrl = '/api/login';
    constructor(private http:Http){}
    login(acc: Login):Promise<ILogin>{
        return this.http.post(this.loginUrl,acc)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    checkEmailAndPassword(acc: Login):Promise<IUser>{
      
        return this.http.get(this.loginUrl+ "/"+acc.email+"/"+acc.password)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    resetPassword(email,newPwd){
        return this.http.put('/api/resetPassword/'+email+'/'+newPwd,email)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }
    forgotPassword(email){
        return this.http.get('/api/forgotPassword'+ "/"+email)
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