import {selectCarrefourRoot} from "./main.selectors";
import {CarrefourState, HomePageState} from "../state/carrefour.state";
import {createSelector} from "@ngrx/store";


export const selectHomePageState = createSelector(
  selectCarrefourRoot,
  (state: CarrefourState): HomePageState | undefined => state.homePage,
);
