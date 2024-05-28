import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { EditComponentsComponent } from './components/edit-components/edit-components.component';
import { SampleworkoutComponent } from './components/sampleworkout/sampleworkout.component';
import { RandomPipe } from './random.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent,
    EditComponentsComponent,
    SampleworkoutComponent,
    RandomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
