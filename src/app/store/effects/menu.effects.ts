import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MenuAction, ProductApiActions} from "../actions";

@Injectable()
export class MenuEffects {

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}

  handleGetAllProductCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MenuAction.getAllProductCategories),
      switchMap(_action => of(ProductApiActions.getAllProductCategories())),
    );
  });
}
