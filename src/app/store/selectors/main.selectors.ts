import { createFeatureSelector } from '@ngrx/store';
import { CARREFOUR_FEATURE_NAME, CarrefourState } from '../state/carrefour.state';

// Root selector. Should be used only to create child selector.
export const selectCarrefourRoot = createFeatureSelector<CarrefourState>(CARREFOUR_FEATURE_NAME);
