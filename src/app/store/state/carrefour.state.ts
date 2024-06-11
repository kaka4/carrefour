import {Product} from "../../core/models/product.model";

export const CARREFOUR_FEATURE_NAME = 'carrefour';

export interface CarrefourState {
  homePage?: HomePageState;
}

export interface HomePageState {
  isLoading?: boolean;
  products?: Array<Product>;
}

export const INITIAL_CARREFOUR_STATE: CarrefourState = {
  homePage: undefined
};
