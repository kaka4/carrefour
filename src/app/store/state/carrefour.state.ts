import {Product, ProductBasicInfos, ProductCart} from "../../core/models/product.model";

export const CARREFOUR_FEATURE_NAME = 'carrefour';

export interface CarrefourState {
  categoryPage?: CategoryPageState;
  cartPage?: CartPageState;
  homePage?: HomePageState;
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

export interface CategoryPageState {
  isLoading?: boolean;
  products?: Array<Product>;
}


export const INITIAL_CARREFOUR_STATE: CarrefourState = {
  homePage: undefined,
  categoryPage: undefined,
  cartPage: undefined,
  menu: undefined
};
