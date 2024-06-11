import { Action, createReducer, on } from '@ngrx/store';
import {HomePageState, INITIAL_CARREFOUR_STATE, MenuState} from '../state/carrefour.state';
import {MenuAction, ProductApiActions} from "../actions";

type STATE = MenuState | undefined;
const initialState: MenuState | undefined = INITIAL_CARREFOUR_STATE.menu;

const _menuReducer = createReducer(
  initialState,
  on(ProductApiActions.getAllProductCategoriesSucceeded, (state, { categories }): STATE => {
    return {
      ...state,
      categories
    };
  }),
);

export function menuReducer(state: MenuState | undefined, action: Action): MenuState | undefined {
  return _menuReducer(state, action);
}
