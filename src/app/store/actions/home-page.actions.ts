import { createAction, props } from '@ngrx/store';

const homePageActionPrefixType = '[Carrefour-HomePage]';

export const init = createAction(
  `${homePageActionPrefixType} Init home page`);
