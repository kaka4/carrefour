import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ProductApiActions} from '../../actions';
import {ProductClientService} from "../../../core/services/product-client.service";
import {Product} from "../../../core/models/product.model";


@Injectable()
export class ProductApiEffects {

  constructor(private actions$: Actions, private productClientService: ProductClientService) {}

  getAllProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductApiActions.getAllProduct),
      switchMap((_action) =>
        this.productClientService.getAllProducts().pipe(
          switchMap((products: Array<Product>) => of(ProductApiActions.getAllProductSucceeded({ products }))),
          catchError(({ error }) => of(ProductApiActions.getAllProductFailed({ error }))),
        ),
      ),
    );
  });

  getAllProductCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductApiActions.getAllProductCategories),
      switchMap((_action) =>
        this.productClientService.getAllProductCategories().pipe(
          switchMap((categories: Array<string>) => of(ProductApiActions.getAllProductCategoriesSucceeded({ categories }))),
          catchError(({ error }) => of(ProductApiActions.getAllProductCategoriesFailed({ error }))),
        ),
      ),
    );
  });

  getAllProductsFromCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductApiActions.getAllProductsFromCategory),
      switchMap(({categoryId}) =>
        this.productClientService.getAllProductsFromCategory(categoryId).pipe(
          switchMap((products: Array<Product>) => of(ProductApiActions.getAllProductsFromCategorySucceeded({ products }))),
          catchError(({ error }) => of(ProductApiActions.getAllProductsFromCategoryFailed({ error }))),
        ),
      ),
    );
  });
}
