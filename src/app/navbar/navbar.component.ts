import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  test:boolean = false;
  decoded: any;
  data = { user: { _id: '' } };

  constructor(private cookie:CookieService ,private route:Router){}
  ngOnInit(): void {
    let token = this.cookie.get('token');
    this.decoded = jwtDecode<any>(token)
    this.data.user._id = this.decoded.user._id;
  }
  listproducts:any
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
  return this.test=false 


}

navchange1(){
  if(this.cookie.get('token') )
  {
  if( this.decoded.user.liste==="admin" ){
    console.log(this.test)
    return this.test=true
  
  }else{
    return this.test=false
  }
  
  }
  
    return this.test=false 

  }




change(){
  if(this.cookie.get('token'))
  {
    if(this.decoded.user.liste){
      return this.test=true
      
    }else{
      return this.test=false
    }
  }
  return this.test=false 
}


logout(){
  this.cookie.delete('token')
  this.route.navigate(["/signin"])

}




}


