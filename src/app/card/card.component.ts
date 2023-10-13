import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  products: any;
  cartProducts:any;


    constructor(private _data:DataService,private route:Router){}
  ngOnInit(): void {
    this._data.getCartProducts().subscribe(
      res =>{
        this.cartProducts = res;
      },
      err =>{
        console.log(err);
      }
    );


  }

  deleteProduct(id:any){
    this._data.delete(id).subscribe(
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
