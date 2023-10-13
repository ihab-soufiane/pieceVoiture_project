import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../auth/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  test=false
  router: any;
  constructor(private service:RegisterService , private route:Router){

  }

myForm = new FormGroup({
  firstname : new FormControl(''),
  lastname: new FormControl(''),
  email : new FormControl(''),
  password : new FormControl(''),
  liste : new FormControl(''),
  matricule:new FormControl('')
})


mat(){
  if (this.myForm.value.liste==="business"){
    return this.test=true
  }
  return this.test=false


}
sub(){
  console.log(this.myForm.value)
  this.service.signup(this.myForm.value).subscribe((data:any)=>{
    console.log(data.token)
  })


  console.log(this.myForm.value.liste)
}

get control():any
{
  return this.myForm
}



opt=false
selectedDay: string = '';


 selectChangeHandler (event: any) {
  //update the ui
  this.selectedDay = event.target.value;
  

}
}
