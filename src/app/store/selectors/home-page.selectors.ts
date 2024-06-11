import {selectCarrefourRoot} from "./main.selectors";
import {CarrefourState, HomePageState} from "../state/carrefour.state";
import {createSelector} from "@ngrx/store";
import {Product} from "../../core/models/product.model";
import {home} from "ionicons/icons";


export const selectHomePageState = createSelector(
  selectCarrefourRoot,
  (state: CarrefourState): HomePageState | undefined => state.homePage
);

export const selectAllProducts = createSelector(
  selectHomePageState,
  (homePage: HomePageState | undefined): Array<Product> | undefined => homePage?.products
);

export const isHomePageLoading = createSelector(
  selectHomePageState,
  (homePage: HomePageState | undefined): boolean | undefined => homePage?.isLoading
);


