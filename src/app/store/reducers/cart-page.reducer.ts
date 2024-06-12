import {Action, createReducer, on} from '@ngrx/store';
import {CartPageState, HomePageState, INITIAL_CARREFOUR_STATE} from '../state/carrefour.state';
import {CartPageActions, HomePageActions, ProductApiActions, SystemActions} from "../actions";

type STATE = CartPageState | undefined;
const initialState: CartPageState | undefined = INITIAL_CARREFOUR_STATE.cartPage;

const _cartPageReducer = createReducer(
  initialState,

  on(HomePageActions.addProductToCart, (state, {product}) => {
    if (state?.products){
      const existingProductIndex = state.products.findIndex(p => p.product.id === product.id);

      if (existingProductIndex >= 0) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + 1
        };
        return {...state, products: updatedProducts};
      }
      return {
        ...state,
        products: [...state.products, {product, quantity: 1}]
      };
    }
    return state;
  }),
  on(CartPageActions.updateProductQuantity, (state, {productId, quantity}) => {
    if(state?.products){
      const productIndex = state.products.findIndex(p => p.product.id === productId);

      if (productIndex >= 0 && quantity > 0) {
        const updatedProducts = [...state.products];
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          quantity
        };
        return {...state, products: updatedProducts};
      } else if (productIndex >= 0 && quantity <= 0) {
        // If the quantity is 0 or less, remove the product from the cart
        return {
          ...state,
          products: state.products.filter(p => p.product.id !== productId)
        };
      }
    }
    return state;
  }),
  on(SystemActions.setCartFromLocalStorageIntoStore, (state, {products}) => ({
    ...state,
    products
  })),

);

export function cartPageReducer(state: CartPageState | undefined, action: Action): CartPageState | undefined {
  return _cartPageReducer(state, action);
}
