import {selectCarrefourRoot} from "./main.selectors";
import {CarrefourState, HomePageState} from "../state/carrefour.state";
import {createSelector} from "@ngrx/store";
import {Product} from "../../core/models/product.model";


export const selectHomePageState = createSelector(
  selectCarrefourRoot,
  (state: CarrefourState): HomePageState | undefined => state.homePage
);

export const selectAllProducts = createSelector(
  selectHomePageState,
  (homePage: HomePageState | undefined): Array<Product> | undefined => homePage?.products
);

export const selectProductsByPriceRange = (minPrice: number, maxPrice: number) => createSelector(
  selectAllProducts,
  (products: Array<Product> | undefined): Array<Product> | undefined =>
    products?.filter(product => product.price >= minPrice && product.price <= maxPrice)
             .sort((a, b) => a.price - b.price)
);

export const selectIsHomePageLoading = createSelector(
  selectHomePageState,
  (homePage: HomePageState | undefined): boolean | undefined => homePage?.isLoading
);


