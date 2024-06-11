import { Type } from '@angular/core';
import {HomePageEffects} from "./home-page.effects";
import {ProductApiEffects} from "./api/product-api.effects";
import {MenuEffects} from "./menu.effects";


export const CARREFOUR_EFFECTS: Array<Type<any>> = [
  HomePageEffects,
  MenuEffects,
  ProductApiEffects
];
