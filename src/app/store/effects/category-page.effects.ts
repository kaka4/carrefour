import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import {CategoryPageActions, HomePageActions, ProductApiActions} from "../actions";

@Injectable()
export class CategoryPageEffects {

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}

  handleGetAllProductsFromCategoryAtInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoryPageActions.getAllProductsFromCategory),
      switchMap(({categoryId}) => of(ProductApiActions.getAllProductsFromCategory({categoryId}))),
    );
  });
}
