import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: any;
  listproducts:any;
  constructor(private _data:DataService,private route:Router){}
ngOnInit(): void {
  this._data.all().subscribe(
    res =>{
      this.products = res;
    },
    err =>{
      console.log(err);
    }
  );
}
getProductById(id:any){
  this.route.navigate(['detailProduct/'+id])
}

addProductToCart(product:any){
  //add product to cart and to database
  this._data.addToCart(product).subscribe(
    res=>{
      console.log(res);
      this.ngOnInit();
    }
  )
}
}
