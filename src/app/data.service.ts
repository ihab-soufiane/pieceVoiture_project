import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urls = 'http://localhost:5000/product/';

  constructor(private http : HttpClient) {  } 

  create(product:any):Observable<any>{

    return this.http.post<any>("http://localhost:5000/product/create",product);
  }

  all(){
    return this.http.get(this.urls + 'all');
  }

  delete(id: any){
    return this.http.delete(this.urls + 'delete/' + id);
  }

  update(id: any){
    return this.http.put(this.urls + 'update/' + id, null);
  }
  getProductById(id: any){ 
    return this.http.get(this.urls + 'getbyid/'+id);
  }

  addToCart(product:any){
    return this.http.post<any>("http://localhost:5000/cart/create",product);
  }

  deleteCartProduct(id:any){
    return this.http.delete("http://localhost:5000/cart/delete/"+id);
  }

  getCartProducts(){
    return this.http.get("http://localhost:5000/cart/all");
  }

}




