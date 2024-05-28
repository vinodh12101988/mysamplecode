import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-components',
  templateUrl: './edit-components.component.html',
  styleUrl: './edit-components.component.css'
})
export class EditComponentsComponent implements OnInit{
  updateproducthtml: product={
    id:'',
    product_Name:'',
    type:'',
    colour:'',
    price:0
  }
constructor(private router: Router, private productservice : ProductsService, private route : ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>
        {
          const id= params.get('id');
          if (id)
            {
              this.productservice.GetProduct(id).subscribe({
                next: (response)=>{
                  this.updateproducthtml=response;
                }
              }

              )
            }
        }
    })
  }
  updateproduct(){
this.productservice.updateProduct(this.updateproducthtml.id, this.updateproducthtml).subscribe({

  next: (Response)=>{
    this.router.navigate(['productsLink']);
  },
error: (err)=>{
  console.log(err);
}


});
  }
}
