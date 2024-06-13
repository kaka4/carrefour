import {createAction, props} from "@ngrx/store";
import {ProductCart} from "../../core/models/product.model";

const systemActionPrefixType = '[Carrefour-System]';

export const initApp = createAction(
  `${systemActionPrefixType} App initialisation`);

export const loadCartFromLocalStorage = createAction(
  `${systemActionPrefixType} Load cart from the localStorage if present`);

export const setCartFromLocalStorageIntoStore = createAction(
  `${systemActionPrefixType} Set cart from the localStorage into the store`, props<{products: Array<ProductCart>}>());
