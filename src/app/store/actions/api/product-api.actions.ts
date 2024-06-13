import {createAction, props} from '@ngrx/store';
import {Product, ProductCategory} from "../../../core/models/product.model";


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
  props<{ categories: Array<ProductCategory> }>(),
);
export const getAllProductCategoriesFailed = createAction(`${getAllProductCategoriesType} failed`, props<{ error: any }>());

const getAllProductsFromCategoryType = '[Carrefour-Product-API] Get all product from a category';
export const getAllProductsFromCategory = createAction(getAllProductsFromCategoryType, props<{ categoryId: string }>())
export const getAllProductsFromCategorySucceeded = createAction(
  `${getAllProductsFromCategoryType} succeeded`,
  props<{ products: Array<Product> }>(),
);
export const getAllProductsFromCategoryFailed = createAction(`${getAllProductsFromCategoryType} failed`, props<{ error: any }>());
