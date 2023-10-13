import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  Products:any
  searchText:any;
  constructor(
    private Service: AdminService,
  ){}

  ngOnInit(): void {
    this.Service.getAllProducts().subscribe(
      res =>{
        
        this.Products = res;
        console.log(this.Products);
        
      },
      err =>{
        console.log(err);
      }
    );      

  }

  deleteProduct(id:any){
    this.Service.deleteProduct(id).subscribe(
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
