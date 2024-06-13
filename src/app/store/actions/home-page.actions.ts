import { createAction, props } from '@ngrx/store';
import {ProductBasicInfos} from "../../core/models/product.model";

const homePageActionPrefixType = '[Carrefour-HomePage]';

export const getAllProductsAtInit = createAction(
  `${homePageActionPrefixType} Get all products at init`);

export const addProductToCart = createAction(
  `${homePageActionPrefixType} Add a product to cart`, props<{ product: ProductBasicInfos }>());
