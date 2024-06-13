import {selectCarrefourRoot} from "./main.selectors";
import {CarrefourState, CategoryPageState, HomePageState} from "../state/carrefour.state";
import {createSelector} from "@ngrx/store";
import {Product} from "../../core/models/product.model";
import {selectHomePageState} from "./home-page.selectors";


const selectCategoryPageState = createSelector(
  selectCarrefourRoot,
  (state: CarrefourState): CategoryPageState | undefined => state.categoryPage
);

export const selectAllProductsFromCategory = createSelector(
  selectCategoryPageState,
  (categoryPage: CategoryPageState | undefined): Array<Product> | undefined => categoryPage?.products
);

export const selectIsCategoryPageLoading = createSelector(
  selectCategoryPageState,
  (categoryPage: CategoryPageState | undefined): boolean | undefined => categoryPage?.isLoading
);





