import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product = {
    reference:'',
    nom:'',
    marque:'',
    quantite:0,
    price:0,
    image:File,
    marque_voiture: ''
  }
  
  products: any;

  imageFile: any;
  onFileSelected(event: any){
    console.log(event.target?.files[0])
    this.imageFile = event.target.files[0];

}
  constructor(private _data:DataService){}
  ngOnInit(): void{
    this._data.all().subscribe({
      next:(res)=>{
        this.products=res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  myForm=new FormGroup({
    reference:new FormControl(),
    nom:new FormControl(),

    marque:new FormControl(),

    quantite:new FormControl(),

    price:new FormControl(),

    marque_voiture:new FormControl(),

    image:new FormControl(File),

  })
  sendData(){
   let product = {
      reference:this.myForm.value.reference,
      nom:this.myForm.value.nom,
      marque: this.myForm.value.marque,
      quantite: this.myForm.value.quantite,
      price: this.myForm.value.price,
      image:this.imageFile,
      marque_voiture: this.myForm.value.marque_voiture
    }

    let formData=new  FormData();
    formData.append("reference" ,this.myForm.value.reference)
   formData.append("nom" ,this.myForm.value.nom)
   formData.append("marque" ,this.myForm.value.marque)
    formData.append("quantite" ,this.myForm.value.quantite)
    formData.append("price" ,this.myForm.value.price)
    formData.append("image" ,this.imageFile)
   formData.append("marque_voiture" ,this.myForm.value.marque_voiture)
console.log(product);
 this._data.create(formData).subscribe((data:any)=>{
  console.log(data);
 },(error:any)=>{
  console.log(error);
 }) 
}
  // save(){
  

  //     this._data.create(this.myForm.value).subscribe({
  //       next: (res)=>{
          
  //         console.log(res)
  //       },
  //       error: (err)=>{
  //         console.log(err)

  //       }     
  // })
  


  


//}
delete(id: any){

  this._data.delete(id).subscribe({
    next: (res)=>{
      this.ngOnInit();
      console.log(res)
    },
    error: (err)=>{
      console.log(err)

    }     
})
}

done(id: any){

  this._data.update(id).subscribe({
    next: (res)=>{
      this.ngOnInit();
      console.log(res)
    },
    error: (err)=>{
      console.log(err)

    }     
})
}

getdata(reference:string,nom:string,marque:string,quantite:number,price:number,marque_voiture:string){
  this.product.reference=reference
  this.product.nom=nom
  this.product.marque=marque
  this.product.quantite=quantite
  this.product.price=price
  this.product.marque_voiture=marque_voiture
  console.log(this.product)

}
}
