import {selectCarrefourRoot} from "./main.selectors";
import {CarrefourState, MenuState} from "../state/carrefour.state";
import {createSelector} from "@ngrx/store";
import {ProductCategory} from "../../core/models/product.model";


const selectMenuState = createSelector(
  selectCarrefourRoot,
  (state: CarrefourState): MenuState | undefined => state.menu,
);

export const selectProductCategories = createSelector(
  selectMenuState,
  (menu: MenuState | undefined): Array<ProductCategory> | undefined => menu?.categories,
);


