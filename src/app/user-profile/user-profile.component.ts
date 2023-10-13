import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  test=false
  decoded:any
  data:any=""
  
constructor(private service:DataService,private cookie: CookieService,private actroute:ActivatedRoute){}
  ngOnInit(): void {
    let token = this.cookie.get('token');
    this.decoded = jwtDecode<any>(token)  
    this.data=this.decoded.user
    

    this.myForm=new FormGroup({
      email:new FormControl(this.data.email),
      firstname:new FormControl(this.data.firstname),
      lastname:new FormControl(this.data.lastname),
      password:new FormControl(),
      matricule:new FormControl(this.data.matricule),
    })
  }

navchange(){
  if(this.cookie.get('token') )
  {
  if( this.cookie.get('role') === "business" ){
    this.test=true
    return this.cookie.get('role')
  
  }else if (this.cookie.get('role') === "admin"){
    this.test=true
    return this.cookie.get('role')
    
  }else if (this.cookie.get('role') === "Customer"){
    this.test=true
    return this.cookie.get('role')
    
  }
  
  
  }
  console.log(this.test)
    return this.test=false 
  
  }

  myForm=new FormGroup({
    email:new FormControl(),
    firstname:new FormControl(),
    lastname:new FormControl(),
    password:new FormControl(),
    matricule:new FormControl(),
  })
    updateP(){
    
    }
    
    showContent: boolean = false;
    showContent2: boolean = false;


    changeContent() {
      this.showContent = !this.showContent;
    }
    changeorder() {
      this.showContent2 = !this.showContent2;
    }

    scrollToElement(elementId: string): void {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

}
