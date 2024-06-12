import {selectCarrefourRoot} from "./main.selectors";
import {CarrefourState, CartPageState, HomePageState} from "../state/carrefour.state";
import {createSelector} from "@ngrx/store";
import {ProductBasicInfos, ProductCart} from "../../core/models/product.model";


const selectCartPageState = createSelector(
  selectCarrefourRoot,
  (state: CarrefourState): CartPageState | undefined => state.cartPage
);

export const selectAllProductCart = createSelector(
  selectCartPageState,
  (cartPage: CartPageState | undefined): Array<ProductCart> | undefined => cartPage?.products
);

export const selectCountProductsInCart = createSelector(
  selectAllProductCart,
  (productCart: Array<ProductCart> | undefined): number | undefined =>
    productCart?.reduce((total, product) => total + product.quantity, 0)
);


export const selectSumAllProductsInCart = createSelector(
  selectAllProductCart,
  (productCart: Array<ProductCart> | undefined): number | undefined =>
    productCart?.reduce((total, item) => total + item.quantity * item.product.price, 0)
);


