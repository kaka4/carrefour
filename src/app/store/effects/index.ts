import { Type } from '@angular/core';
import {HomePageEffects} from "./home-page.effects";
import {ProductApiEffects} from "./api/product-api.effects";


export const CARREFOUR_EFFECTS: Array<Type<any>> = [
  HomePageEffects,
  ProductApiEffects
];
