import {createAction, props} from '@ngrx/store';
import {ProductBasicInfos} from "../../core/models/product.model";

const cartPageActionPrefixType = '[Carrefour-CategoryPage]';

export const getAllProductsFromCategory = createAction(
  `${cartPageActionPrefixType} Get all products from a category`,
  props<{ categoryId: string }>()
);

export const addProductToCart = createAction(
  `${cartPageActionPrefixType} Add a product to cart`, props<{ product: ProductBasicInfos }>());
