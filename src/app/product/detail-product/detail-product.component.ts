import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{
  products: any;
  listproducts:any;
  id:any;
  product: any;
  constructor(private act:ActivatedRoute, private data:DataService){}
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.data.getProductById(this.id)
    .subscribe(
      res=>{
      this.product= res;
    
  })
}
}
