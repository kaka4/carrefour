import { createAction, props } from '@ngrx/store';


const getAllProductsType = '[Carrefour-Product-API] Get all products';
export const getAllProduct = createAction(getAllProductsType);
export const getAllProductSucceeded = createAction(`${getAllProductsType} succeeded`, props<{ products: any }>(),);
