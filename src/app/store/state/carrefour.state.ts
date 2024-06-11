import {Product} from "../../core/models/product.model";

export const CARREFOUR_FEATURE_NAME = 'carrefour';

export interface CarrefourState {
  homePage?: HomePageState;
  menu?: MenuState;
}

export interface HomePageState {
  isLoading?: boolean;
  products?: Array<Product>;
}

export interface MenuState {
  categories?: Array<string>;
}


export const INITIAL_CARREFOUR_STATE: CarrefourState = {
  homePage: undefined
};
