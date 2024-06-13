import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product, ProductCategory} from "../models/product.model";

@Injectable()
export class ProductClientService {
  constructor(private httpClient: HttpClient) {}

  readonly SERVICE_BASE_URL = 'https://fakestoreapi.com/products';

  getAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(`${this.SERVICE_BASE_URL}`);
  }

  getAllProductCategories(): Observable<Array<ProductCategory>> {
    return this.httpClient.get<Array<ProductCategory>>(`${this.SERVICE_BASE_URL}/categories`);
  }

  getAllProductsFromCategory(categoryId: string):Observable<Array<Product>>  {
    return this.httpClient.get<Array<Product>>(`${this.SERVICE_BASE_URL}/category/${categoryId}`);
  }
}
