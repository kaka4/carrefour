import { createAction, props } from '@ngrx/store';

const cartPageActionPrefixType = '[Carrefour-CartPage]';

export const removeProductFromCart = createAction(
  `${cartPageActionPrefixType} Remove Product From Cart`,
  props<{ productId: string }>()
);

export const updateProductQuantity = createAction(
  `${cartPageActionPrefixType} Update product quantity`,
  props<{ productId: string, quantity: number }>()
);
