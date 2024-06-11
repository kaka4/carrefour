import {createAction} from "@ngrx/store";
const menuActionPrefixType = '[Carrefour-SideMenu]';

export const getAllProductCategories = createAction(
  `${menuActionPrefixType} Get all product categories`);
