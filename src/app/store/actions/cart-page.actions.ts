import {createAction, props} from '@ngrx/store';

const cartPageActionPrefixType = '[Carrefour-CartPage]';

export const updateProductQuantity = createAction(
  `${cartPageActionPrefixType} Update product quantity`,
  props<{ productId: string, quantity: number }>()
);
