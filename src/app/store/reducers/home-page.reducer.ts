import { Action, createReducer, on } from '@ngrx/store';
import {HomePageState, INITIAL_CARREFOUR_STATE} from '../state/carrefour.state';
import {ProductApiActions} from "../actions";

type STATE = HomePageState | undefined;
const initialState: HomePageState | undefined = INITIAL_CARREFOUR_STATE.homePage;

const _homePageReducer = createReducer(
  initialState,
  on(ProductApiActions.getAllProductSucceeded, (state, { products }): STATE => {
    return {
      ...state,
      products
    };
  }),
);

export function homePageReducer(state: HomePageState | undefined, action: Action): HomePageState | undefined {
  return _homePageReducer(state, action);
}
