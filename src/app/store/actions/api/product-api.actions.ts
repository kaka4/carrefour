import { createAction, props } from '@ngrx/store';
import {Product} from "../../../core/models/product.model";


const getAllProductsType = '[Carrefour-Product-API] Get all products';
export const getAllProduct = createAction(getAllProductsType);
export const getAllProductSucceeded = createAction(
  `${getAllProductsType} succeeded`,
  props<{ products: Array<Product> }>(),
);
export const getAllProductFailed = createAction(`${getAllProductsType} failed`, props<{ error: any }>());


const getAllProductCategoriesType = '[Carrefour-Product-API] Get all product categories';
export const getAllProductCategories = createAction(getAllProductCategoriesType);
export const getAllProductCategoriesSucceeded = createAction(
  `${getAllProductCategoriesType} succeeded`,
  props<{ categories: Array<string> }>(),
);
export const getAllProductCategoriesFailed = createAction(`${getAllProductCategoriesType} failed`, props<{ error: any }>());
