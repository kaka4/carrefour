import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from "../models/product.model";

@Injectable()
export class ProductClientService {
  constructor(private httpClient: HttpClient) {}

  readonly SERVICE_BASE_URL = 'https://fakestoreapi.com/products';

  getAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(`${this.SERVICE_BASE_URL}`);
  }

  getProduct(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.SERVICE_BASE_URL}/${productId}`);
  }

  getAllProductCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${this.SERVICE_BASE_URL}/categories`);
  }

  getAllProductInSpecificCategory(categoryId: string):Observable<Array<Product>>  {
    return this.httpClient.get<Array<Product>>(`${this.SERVICE_BASE_URL}/categories/${categoryId}`);
  }
}
