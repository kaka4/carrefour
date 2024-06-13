import {selectCarrefourRoot} from "./main.selectors";
import {CarrefourState, HomePageState, MenuState} from "../state/carrefour.state";
import {createSelector} from "@ngrx/store";
import {Product, ProductCategory} from "../../core/models/product.model";
import {home} from "ionicons/icons";


const selectMenuState = createSelector(
  selectCarrefourRoot,
  (state: CarrefourState): MenuState | undefined => state.menu,
);

export const selectProductCategories = createSelector(
  selectMenuState,
  (menu: MenuState | undefined): Array<ProductCategory> | undefined => menu?.categories,
);


