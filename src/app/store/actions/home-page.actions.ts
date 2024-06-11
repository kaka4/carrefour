import { createAction, props } from '@ngrx/store';

const homePageActionPrefixType = '[Carrefour-HomePage]';

export const getAllProductsAtInit = createAction(
  `${homePageActionPrefixType} Get all products at init`);
