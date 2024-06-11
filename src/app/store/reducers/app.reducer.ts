import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromHomePage from './home-page.reducer';


import { CarrefourState } from '../state/carrefour.state';

export const CARREFOUR_REDUCERS = new InjectionToken<ActionReducerMap<CarrefourState>>('Carrefour reducers token', {
  factory: (): ActionReducerMap<CarrefourState> => ({
    homePage: fromHomePage.homePageReducer,
  }),
});
