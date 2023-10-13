import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent {
  Users:any
  searchText:any
  constructor(
    private Service : AdminService,
    private route:Router
    ){}

    ngOnInit(): void {
      this.Service.getAllUsers().subscribe(
        res =>{
          
          this.Users = res;
        },
        err =>{
          console.log(err);
        }
      );      
  
    }
  
    deleteUser(id:any){
      this.Service.deleteUser(id).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        },
        err=>{
          console.log(err);
        }
      )
    }
}
