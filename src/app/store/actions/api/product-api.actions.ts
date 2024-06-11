import { createAction, props } from '@ngrx/store';
import {Product} from "../../../core/models/product.model";


const getAllProductsType = '[Carrefour-Product-API] Get all products';
export const getAllProduct = createAction(getAllProductsType);
export const getAllProductSucceeded = createAction(
  `${getAllProductsType} succeeded`,
  props<{ products: Array<Product> }>(),
);
export const getAllProductFailed = createAction(`${getAllProductsType} failed`, props<{ error: any }>());
