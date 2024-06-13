import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {HomePageActions, ProductApiActions} from "../actions";

@Injectable()
export class HomePageEffects {

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}

  handleGetAllProductsAtInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomePageActions.getAllProductsAtInit),
      switchMap((_action) => of(ProductApiActions.getAllProduct())),
    );
  });
}
