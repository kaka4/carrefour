import { Action, createReducer, on } from '@ngrx/store';
import {CategoryPageState, HomePageState, INITIAL_CARREFOUR_STATE} from '../state/carrefour.state';
import {CategoryPageActions, HomePageActions, ProductApiActions} from "../actions";
import {getAllProductsFromCategorySucceeded} from "../actions/api/product-api.actions";

type STATE = CategoryPageState | undefined;
const initialState: CategoryPageState | undefined = INITIAL_CARREFOUR_STATE.categoryPage;

const _categoryPageReducer = createReducer(
  initialState,
  on(CategoryPageActions.getAllProductsFromCategory, (state): STATE => {
    return {
      ...state,
      products: undefined,
      isLoading: true
    };
  }),
  on(ProductApiActions.getAllProductsFromCategorySucceeded, (state, { products }): STATE => {
    return {
      ...state,
      isLoading: false,
      products
    };
  }),
  on(ProductApiActions.getAllProductsFromCategoryFailed, (state, { error }): STATE => {
    return {
      ...state,
      isLoading: false,
      //TODO: handle error
    };
  }),
);

export function categoryPageReducer(state: CategoryPageState | undefined, action: Action): CategoryPageState | undefined {
  return _categoryPageReducer(state, action);
}
