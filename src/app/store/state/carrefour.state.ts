import {Product, ProductBasicInfos, ProductCart} from "../../core/models/product.model";

export const CARREFOUR_FEATURE_NAME = 'carrefour';

export interface CarrefourState {
  homePage?: HomePageState;
  cartPage?: CartPageState;
  menu?: MenuState;
}

export interface HomePageState {
  isLoading?: boolean;
  products?: Array<Product>;
}


export interface CartPageState {
  products: Array<ProductCart>;
}


export interface MenuState {
  categories?: Array<string>;
}


export const INITIAL_CARREFOUR_STATE: CarrefourState = {
  homePage: undefined,
  cartPage: { products: []},
  menu: { categories: undefined}
};
