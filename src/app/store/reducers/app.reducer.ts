import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromHomePage from './home-page.reducer';
import * as fromMenu from './menu.reducer';
import * as fromCartPage from './cart-page.reducer';
import * as fromCategoryPage from './category-page.reducer';





import { CarrefourState } from '../state/carrefour.state';

export const CARREFOUR_REDUCERS = new InjectionToken<ActionReducerMap<CarrefourState>>('Carrefour reducers token', {
  factory: (): ActionReducerMap<CarrefourState> => ({
    homePage: fromHomePage.homePageReducer,
    menu: fromMenu.menuReducer,
    cartPage:fromCartPage.cartPageReducer,
    categoryPage: fromCategoryPage.categoryPageReducer
  }),
});
