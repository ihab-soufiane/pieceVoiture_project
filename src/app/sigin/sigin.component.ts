import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../auth/register.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent {
error:any=""
res:any=""

  constructor(private service:RegisterService,private route:Router,private cookie:CookieService){

  }

  myForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  
  })
  sub(){
  
    this.service.signin(this.myForm.value).subscribe((data:any)=>{
      console.log(data)
      this.cookie.set("role",data.user.liste)
      this.cookie.set("token",data.token)

        if(data.user.liste==="admin"){
          this.route.navigate(["/user/"+data.user._id])
        }else if(data.user.liste==="business"){
          this.route.navigate(["/user/"+data.user._id])
        }else{
          this.route.navigate(["/user/"+data.user._id])
        }

           this.res=data.message

     // this.route.navigate(["/user"])
    },(error:any)=>{
      this.error=error.error.message
      console.log(error)
    })
  
  }


}
