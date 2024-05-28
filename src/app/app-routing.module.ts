import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { EditComponentsComponent } from './components/edit-components/edit-components.component';
import { SampleworkoutComponent } from './components/sampleworkout/sampleworkout.component';

const routes: Routes = [
  {
    path:'',
    component: ProductsComponent
  },
  {
    path:'productsLink',
    component : ProductsComponent
  },
  {
    path: 'products/add',
    component: AddProductsComponent
  },
  {
    path: 'products/edit/:id',
    component: AddProductsComponent
  },
  {
    path: 'sampleworkout',
    component:SampleworkoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
