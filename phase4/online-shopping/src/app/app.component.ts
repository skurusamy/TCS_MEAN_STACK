import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shopping';
  isHomePage=true;
  isLoggedIn = false;
  isUser = false;
  isCustomer=false;
  constructor(
    private router:Router,
  ) {
    this.router.navigate(['/app/home'])
    //this.router.navigate(['/app/admin-home'])
    //this.router.navigate(['app/user-home'])
  }
  

  getContainerClass() {
    return this.isHomePage ? 'container-fluid' : 'container';
  }
}
