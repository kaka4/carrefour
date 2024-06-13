import { Type } from '@angular/core';
import {HomePageEffects} from "./home-page.effects";
import {ProductApiEffects} from "./api/product-api.effects";
import {MenuEffects} from "./menu.effects";
import {CartEffects} from "./cart.effects";
import {CategoryPageEffects} from "./category-page.effects";


export const CARREFOUR_EFFECTS: Array<Type<any>> = [
  CategoryPageEffects,
  CartEffects,
  HomePageEffects,
  MenuEffects,
  ProductApiEffects
];
