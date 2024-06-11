import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class HomePageEffects {

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}
}
