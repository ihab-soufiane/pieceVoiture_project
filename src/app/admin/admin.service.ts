import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  getAllProducts(){
    return this.http.get("http://localhost:5000/admin/Products");
  }

  deleteProduct(Id:any){
    return this.http.delete("http://localhost:5000/admin/deleteProduct/"+Id);
  }

  getAllUsers(){
    return this.http.get("http://localhost:5000/admin/Users");
  }

  deleteUser(Id:any){
    return this.http.delete("http://localhost:5000/admin/deleteUser/"+Id);
  }
}
