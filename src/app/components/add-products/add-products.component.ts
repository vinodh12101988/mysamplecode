import { Component } from '@angular/core';
import { product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  newproducts: product={
    id:'',
    product_Name:'',
    type:'',
    colour:'',
    price:0
  };
constructor(private productservice: ProductsService,private router : Router){}

  AddProduct(){
    this.productservice.AddProduct(this.newproducts)
    .subscribe({
      next: (newproducts)=>
        {
          this.router.navigate(['productsLink']);
        },
        error: (Response) =>
          {
            console.log(Response);
          }
    })
      
    }
  }

