import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
productsdec: product[] =[];

constructor(private productservice : ProductsService, private router: Router) {}
ngOnInit(): void {
  this.productservice.GetAllProductsnew().subscribe({
    next: (productsdec1)=>{
      this.productsdec = productsdec1
    },
    error: (Response) =>{
      console.log(Response);
    }
    
    
  });
}

DeleteProduct(id:string){
  this.productservice.DeleteProduct(id)
  .subscribe({
    next: (response)=>
      {
        let currenturl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then
        (()=>{
          this.router.navigate([currenturl]);
        })
      }
  })
  
}
}
