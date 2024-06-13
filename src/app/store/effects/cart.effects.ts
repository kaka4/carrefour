import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatLatestFrom} from "@ngrx/operators";
import {Store} from '@ngrx/store';
import {CartPageActions, HomePageActions, SystemActions} from "../actions";
import {selectAllProductCart} from "../selectors/cart-page.selectors";
import {EMPTY, mergeMap, of, tap} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable()
export class CartEffects {

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}

  handleInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SystemActions.initApp),
      switchMap(_action => of(SystemActions.loadCartFromLocalStorage())),
    );
  });

  getCartFromLocalStorageAtStartup$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SystemActions.loadCartFromLocalStorage),
        mergeMap(() => {
          const savedCart = localStorage.getItem('cart');
          if (savedCart){
            const products = JSON.parse(savedCart);
            return of(SystemActions.setCartFromLocalStorageIntoStore({ products }));
          } else {
            return EMPTY;
          }

        })
      )}
    )

  persistCartToLocalStorage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(HomePageActions.addProductToCart, CartPageActions.updateProductQuantity),
        concatLatestFrom(() => this.store.select(selectAllProductCart)),
        tap(([action, allProducts]) => {
          localStorage.setItem('cart', JSON.stringify(allProducts));
        }),
      );
    },
    { dispatch: false },
  );
}
