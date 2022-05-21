import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    API_URL: string = "http://localhost:3001/products"
  constructor(private http:HttpClient) { }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  addProduct(product: any) {
     return this.http.post(this.API_URL, product)
  }
  updateProduct() {

  }
}