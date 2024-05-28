import { Injectable } from '@angular/core';
import { product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseapiurl: string ="https://localhost:7258";
  constructor(private http: HttpClient) { }


  GetAllProductsnew(): Observable <product[]> {
  return this.http.get<product[]>(this.baseapiurl + '/api/products')
  }

  AddProduct(newProducts : product): Observable<product>{
    newProducts.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<product>(this.baseapiurl + '/api/products', newProducts);
  }
  GetProduct(id: string): Observable<product>{
    return this.http.get<product>(this.baseapiurl + '/api/products/' + id)
  }


  updateProduct(id: string, updateproducthtml: product): Observable<product>{
    return this.http.put<product>(this.baseapiurl + '/api/products/'+ id, updateproducthtml)
  }

  DeleteProduct(id: string): Observable<product>{
    return this.http.delete<product>(this.baseapiurl + '/api/products/' + id)}
}
