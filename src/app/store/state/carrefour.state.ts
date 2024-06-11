
export const CARREFOUR_FEATURE_NAME = 'carrefour';

export interface CarrefourState {
  homePage?: HomePageState;
}

export interface HomePageState {
  isLoading?: boolean;
}

export const INITIAL_CARREFOUR_STATE: CarrefourState = {
  homePage: undefined
};
