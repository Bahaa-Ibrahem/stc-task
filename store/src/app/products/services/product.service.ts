import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`https://fakestoreapi.com/products?limit=10`);
  }

  getProductById(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

  addProduct(product: Product) {
    return this.http.post(`https://fakestoreapi.com/products`, product);
  }
}
