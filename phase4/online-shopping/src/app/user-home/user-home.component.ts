import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],


})
export class UserHomeComponent implements OnInit {

  name: string;
  email:string;
  constructor(
    private ac:ActivatedRoute
  ) { 
    //this.name = this.ac.snapshot.params['name'];
    //this.email = this.ac.snapshot.params['email'];
  }

  ngOnInit(): void {
    document.body.classList.remove('bg_img')
    document.body.classList.add('bg_img1')
    this.email = sessionStorage.getItem('userEmail');
    console.log("in user-home 22",this.email)
    
  }
}
